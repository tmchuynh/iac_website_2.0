/**
 * Load Testing Script for IAC Website Forms
 * Tests concurrent form submissions to evaluate server performance
 * Run with: node scripts/load-test.js
 */

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api'

// Sample test data for load testing
const loadTestData = {
  registration: {
    studentName: 'Load Test Student',
    preferredName: 'Tester',
    grade: '3rd Grade',
    teacherName: 'Ms. Test',
    afterClassCare: 'Yes',
    elementarySchool: 'Test Elementary',
    classTypes: ['arts_and_crafts'],
    parentName: 'Load Test Parent',
    phoneNumber: '714-555-TEST',
    emailAddress: 'loadtest@example.com',
    alternateContactName: 'Alt Test',
    alternateContactPhone: '714-555-ALT1',
    paymentType: 'monthly',
    iacAuthorization: true,
  },
  
  contact: {
    firstName: 'Load',
    lastName: 'Test',
    email: 'loadtest@example.com',
    phoneNumber: '714-555-LOAD',
    inquiryType: 'General question',
    message: 'This is a load test message.',
  }
}

// Performance metrics tracking
class PerformanceMetrics {
  constructor() {
    this.reset()
  }
  
  reset() {
    this.requests = []
    this.startTime = null
    this.endTime = null
  }
  
  start() {
    this.startTime = Date.now()
  }
  
  end() {
    this.endTime = Date.now()
  }
  
  addRequest(duration, success, statusCode) {
    this.requests.push({
      duration,
      success,
      statusCode,
      timestamp: Date.now()
    })
  }
  
  getStats() {
    const successful = this.requests.filter(r => r.success)
    const failed = this.requests.filter(r => !r.success)
    const durations = this.requests.map(r => r.duration)
    
    return {
      total: this.requests.length,
      successful: successful.length,
      failed: failed.length,
      successRate: (successful.length / this.requests.length) * 100,
      avgResponseTime: durations.reduce((a, b) => a + b, 0) / durations.length,
      minResponseTime: Math.min(...durations),
      maxResponseTime: Math.max(...durations),
      totalDuration: this.endTime - this.startTime,
      requestsPerSecond: this.requests.length / ((this.endTime - this.startTime) / 1000)
    }
  }
}

// Single request function with timing
async function timedRequest(endpoint, data, id) {
  const startTime = Date.now()
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        // Add unique identifier to avoid duplicate detection
        _loadTestId: id,
        _timestamp: startTime
      }),
    })
    
    const duration = Date.now() - startTime
    const success = response.ok
    
    return {
      id,
      duration,
      success,
      statusCode: response.status,
      response: await response.text()
    }
  } catch (error) {
    const duration = Date.now() - startTime
    return {
      id,
      duration,
      success: false,
      statusCode: 0,
      error: error.message
    }
  }
}

// Concurrent load test
async function runConcurrentTest(endpoint, data, concurrency = 10, requests = 100) {
  console.log(`🚀 Starting concurrent load test`)
  console.log(`📍 Endpoint: ${endpoint}`)
  console.log(`⚡ Concurrency: ${concurrency}`)
  console.log(`📊 Total requests: ${requests}`)
  console.log(`🌐 API Base URL: ${API_BASE_URL}`)
  console.log('-'.repeat(60))
  
  const metrics = new PerformanceMetrics()
  metrics.start()
  
  const batches = Math.ceil(requests / concurrency)
  let completedRequests = 0
  
  for (let batch = 0; batch < batches; batch++) {
    const batchSize = Math.min(concurrency, requests - completedRequests)
    const batchPromises = []
    
    // Create batch of concurrent requests
    for (let i = 0; i < batchSize; i++) {
      const requestId = completedRequests + i + 1
      batchPromises.push(timedRequest(endpoint, data, requestId))
    }
    
    // Wait for batch to complete
    const batchResults = await Promise.all(batchPromises)
    
    // Record metrics
    batchResults.forEach(result => {
      metrics.addRequest(result.duration, result.success, result.statusCode)
      
      const status = result.success ? '✅' : '❌'
      const duration = result.duration.toString().padStart(4, ' ')
      console.log(`${status} Request ${result.id.toString().padStart(3, ' ')}: ${duration}ms (${result.statusCode})`)
    })
    
    completedRequests += batchSize
    
    // Progress update
    const progress = Math.round((completedRequests / requests) * 100)
    console.log(`📈 Progress: ${completedRequests}/${requests} (${progress}%)`)
    
    // Small delay between batches to avoid overwhelming the server
    if (batch < batches - 1) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
  }
  
  metrics.end()
  return metrics.getStats()
}

// Sequential load test
async function runSequentialTest(endpoint, data, requests = 50, delay = 100) {
  console.log(`🚀 Starting sequential load test`)
  console.log(`📍 Endpoint: ${endpoint}`)
  console.log(`📊 Total requests: ${requests}`)
  console.log(`⏱️  Delay between requests: ${delay}ms`)
  console.log(`🌐 API Base URL: ${API_BASE_URL}`)
  console.log('-'.repeat(60))
  
  const metrics = new PerformanceMetrics()
  metrics.start()
  
  for (let i = 1; i <= requests; i++) {
    const result = await timedRequest(endpoint, data, i)
    metrics.addRequest(result.duration, result.success, result.statusCode)
    
    const status = result.success ? '✅' : '❌'
    const duration = result.duration.toString().padStart(4, ' ')
    console.log(`${status} Request ${i.toString().padStart(3, ' ')}: ${duration}ms (${result.statusCode})`)
    
    if (i % 10 === 0) {
      const progress = Math.round((i / requests) * 100)
      console.log(`📈 Progress: ${i}/${requests} (${progress}%)`)
    }
    
    if (i < requests) {
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  
  metrics.end()
  return metrics.getStats()
}

// Display performance results
function displayResults(stats, testType) {
  console.log(`\\n📊 ${testType.toUpperCase()} TEST RESULTS`)
  console.log('='.repeat(60))
  console.log(`📦 Total requests: ${stats.total}`)
  console.log(`✅ Successful: ${stats.successful}`)
  console.log(`❌ Failed: ${stats.failed}`)
  console.log(`📈 Success rate: ${stats.successRate.toFixed(2)}%`)
  console.log(`⏱️  Total duration: ${stats.totalDuration}ms`)
  console.log(`⚡ Requests per second: ${stats.requestsPerSecond.toFixed(2)}`)
  console.log(`📊 Average response time: ${stats.avgResponseTime.toFixed(2)}ms`)
  console.log(`⚡ Min response time: ${stats.minResponseTime}ms`)
  console.log(`🐌 Max response time: ${stats.maxResponseTime}ms`)
  
  // Performance assessment
  console.log(`\\n🎯 PERFORMANCE ASSESSMENT:`)
  if (stats.successRate >= 95) {
    console.log(`✅ Reliability: EXCELLENT (${stats.successRate.toFixed(1)}% success rate)`)
  } else if (stats.successRate >= 90) {
    console.log(`⚠️  Reliability: GOOD (${stats.successRate.toFixed(1)}% success rate)`)
  } else {
    console.log(`❌ Reliability: POOR (${stats.successRate.toFixed(1)}% success rate)`)
  }
  
  if (stats.avgResponseTime < 500) {
    console.log(`✅ Speed: EXCELLENT (${stats.avgResponseTime.toFixed(0)}ms average)`)
  } else if (stats.avgResponseTime < 1000) {
    console.log(`⚠️  Speed: GOOD (${stats.avgResponseTime.toFixed(0)}ms average)`)
  } else {
    console.log(`❌ Speed: POOR (${stats.avgResponseTime.toFixed(0)}ms average)`)
  }
  
  if (stats.requestsPerSecond > 10) {
    console.log(`✅ Throughput: EXCELLENT (${stats.requestsPerSecond.toFixed(1)} req/sec)`)
  } else if (stats.requestsPerSecond > 5) {
    console.log(`⚠️  Throughput: GOOD (${stats.requestsPerSecond.toFixed(1)} req/sec)`)
  } else {
    console.log(`❌ Throughput: POOR (${stats.requestsPerSecond.toFixed(1)} req/sec)`)
  }
}

// Main load testing function
async function runLoadTests() {
  console.log('🔥 IAC Website Form Load Testing Suite')
  console.log('='.repeat(80))
  
  const tests = [
    {
      name: 'Registration Form - Light Load',
      endpoint: '/contact_us/register',
      data: loadTestData.registration,
      type: 'sequential',
      requests: 20,
      delay: 200
    },
    {
      name: 'Contact Form - Medium Load',
      endpoint: '/contact_us',
      data: loadTestData.contact,
      type: 'concurrent',
      requests: 50,
      concurrency: 5
    },
    {
      name: 'Registration Form - Heavy Load',
      endpoint: '/contact_us/register',
      data: loadTestData.registration,
      type: 'concurrent',
      requests: 100,
      concurrency: 10
    }
  ]
  
  const results = []
  
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i]
    console.log(`\\n🧪 TEST ${i + 1}/${tests.length}: ${test.name}`)
    console.log('='.repeat(80))
    
    let stats
    if (test.type === 'sequential') {
      stats = await runSequentialTest(test.endpoint, test.data, test.requests, test.delay)
    } else {
      stats = await runConcurrentTest(test.endpoint, test.data, test.concurrency, test.requests)
    }
    
    displayResults(stats, test.name)
    results.push({ ...test, stats })
    
    // Pause between tests
    if (i < tests.length - 1) {
      console.log(`\\n⏸️  Pausing 5 seconds before next test...`)
      await new Promise(resolve => setTimeout(resolve, 5000))
    }
  }
  
  // Overall summary
  console.log(`\\n🏆 OVERALL LOAD TEST SUMMARY`)
  console.log('='.repeat(80))
  
  results.forEach((result, index) => {
    console.log(`\\n${index + 1}. ${result.name}:`)
    console.log(`   📊 ${result.stats.total} requests`)
    console.log(`   ✅ ${result.stats.successRate.toFixed(1)}% success rate`)
    console.log(`   ⚡ ${result.stats.avgResponseTime.toFixed(0)}ms average response`)
    console.log(`   🚀 ${result.stats.requestsPerSecond.toFixed(1)} req/sec`)
  })
  
  const overallSuccess = results.every(r => r.stats.successRate >= 90)
  const overallSpeed = results.every(r => r.stats.avgResponseTime < 1000)
  
  console.log(`\\n🎯 FINAL ASSESSMENT:`)
  if (overallSuccess && overallSpeed) {
    console.log(`🏆 EXCELLENT: Server handles load well with good performance`)
  } else if (overallSuccess) {
    console.log(`⚠️  GOOD: Server is reliable but response times could be better`)
  } else {
    console.log(`❌ POOR: Server struggles with load - investigate performance issues`)
  }
  
  console.log(`\\n🏁 Load testing complete!`)
}

// CLI argument parsing
const args = process.argv.slice(2)
const testType = args[0] || 'full'

// Error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})

// Main execution
if (require.main === module) {
  switch (testType) {
    case 'quick':
      runSequentialTest('/contact_us', loadTestData.contact, 10, 100)
        .then(stats => displayResults(stats, 'Quick Contact Form Test'))
        .catch(console.error)
      break
    case 'concurrent':
      runConcurrentTest('/contact_us/register', loadTestData.registration, 5, 25)
        .then(stats => displayResults(stats, 'Concurrent Registration Test'))
        .catch(console.error)
      break
    case 'full':
    default:
      runLoadTests().catch(console.error)
      break
  }
}

module.exports = {
  runConcurrentTest,
  runSequentialTest,
  runLoadTests
}
