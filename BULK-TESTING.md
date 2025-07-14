# 🚀 IAC Website Form Testing Scripts

A comprehensive collection of testing scripts for submitting and validating forms with various data combinations and load scenarios.

## 📋 Available Testing Scripts

### 1. 🧪 Basic API Testing
**Script**: `scripts/test-api.js`
**Command**: `npm run test:api`

- Tests all form endpoints with basic validation
- Validates required fields and error handling
- Provides detailed success/failure reporting

### 2. 📦 Bulk Form Testing
**Script**: `scripts/bulk-form-test.js`
**Commands**:
- `npm run test:bulk` - Submit all form variations systematically
- `npm run test:bulk-random` - Submit 20 random form variations
- `npm run test:stress` - Submit 50 random forms for stress testing

**Features**:
- Multiple realistic data variations for each form type
- Randomization capabilities for stress testing
- Retry logic for failed submissions
- Detailed reporting and timing

### 3. 🔥 Load Testing
**Script**: `scripts/load-test.js`
**Commands**:
- `npm run test:load` - Full load testing suite
- `npm run test:load-quick` - Quick 10-request test
- `npm run test:load-concurrent` - Concurrent submission test

**Features**:
- Performance metrics tracking
- Concurrent and sequential testing
- Response time analysis
- Throughput measurement

## 📊 Form Variations Included

### Registration Form (5 Variations)
1. **Kindergarten Student - Arts Focus**
   - Elementary arts programs
   - After-class care included
   - Monthly payment

2. **5th Grade Student - Sports Focus**
   - Multiple sports programs
   - No after-class care
   - Yearly payment

3. **3rd Grade Student - Diverse Programs**
   - Mixed academic and performance programs
   - After-class care included
   - Monthly payment

4. **1st Grade Student - Single Program**
   - Single comic book program
   - No alternate contact
   - Monthly payment

5. **4th Grade Student - Maximum Programs**
   - All available programs selected
   - Complete contact information
   - Yearly payment

### Contact Form (5 Variations)
1. **Parent General Inquiry** - Art program interest
2. **Program Information Request** - Chess program details
3. **Registration Inquiry** - Twin boys sports registration
4. **School Partnership Inquiry** - Principal partnership request
5. **Employment Inquiry** - Instructor position application

### Application Form (3 Variations)
1. **Elementary Teacher Application** - Experienced educator
2. **College Student Application** - Education major seeking experience
3. **Retired Professional Application** - Chess instructor volunteer

### Feedback Form (3 Variations)
1. **Very Positive Parent Feedback** - Excellent ratings across all categories
2. **Mixed Feedback with Suggestions** - Good ratings with improvement ideas
3. **Anonymous Feedback** - Positive anonymous review

### Request School Form (2 Variations)
1. **Large Elementary School Request** - 600+ students, multiple programs
2. **Small Charter School Request** - <200 students, focused programs

### Request Parent/Student Form (2 Variations)
1. **Parent Art Program Advocacy** - Requesting creative programs
2. **Parent Sports Program Advocacy** - Requesting physical activity programs

## 🚀 Usage Examples

### Basic Testing
```bash
# Start development server
npm run dev

# Test all API endpoints with basic data
npm run test:api
```

### Bulk Testing with Variations
```bash
# Submit all form variations systematically (20+ submissions)
npm run test:bulk

# Submit random variations (20 submissions)
npm run test:bulk-random

# Stress test with many random submissions (50 submissions)
npm run test:stress
```

### Load Testing
```bash
# Quick performance test
npm run test:load-quick

# Test concurrent submissions
npm run test:load-concurrent

# Full load testing suite
npm run test:load
```

### Custom Testing
```bash
# Random testing with custom count
node scripts/bulk-form-test.js --random --count=100

# Load test specific form
node scripts/load-test.js concurrent
```

## 📈 What Gets Tested

### Data Validation
- ✅ Required field validation
- ✅ Email format validation
- ✅ Phone number validation
- ✅ Grade level options
- ✅ Program selection validation
- ✅ Payment type validation

### Form Variations
- ✅ Different student grades (K-5th)
- ✅ Various program combinations
- ✅ Different school locations
- ✅ Payment preference variations
- ✅ Contact information scenarios
- ✅ Anonymous vs. identified submissions

### Performance Metrics
- ✅ Response times
- ✅ Success rates
- ✅ Concurrent request handling
- ✅ Server throughput
- ✅ Error rate analysis

### Edge Cases
- ✅ Maximum program selections
- ✅ Minimum required fields only
- ✅ Optional fields populated/empty
- ✅ Different contact patterns
- ✅ Various inquiry types

## 📊 Sample Test Output

### Bulk Testing Output
```
🎯 Starting Bulk Form Submission Tests
🌐 Base URL: http://localhost:3000/api
================================================================================

📝 TESTING REGISTRATION FORM VARIATIONS
--------------------------------------------------

🚀 Submitting: Registration: Kindergarten Student - Arts Focus
📍 Endpoint: http://localhost:3000/api/contact_us/register
📊 Status: 200 OK
✅ SUCCESS: Registration: Kindergarten Student - Arts Focus

🚀 Submitting: Registration: 5th Grade Student - Sports Focus
📍 Endpoint: http://localhost:3000/api/contact_us/register
📊 Status: 200 OK
✅ SUCCESS: Registration: 5th Grade Student - Sports Focus

📊 BULK TEST SUMMARY
================================================================================
⏱️  Total execution time: 45 seconds
🌐 API Base URL: http://localhost:3000/api

📝 REGISTRATION:
   ✅ Successful: 5/5
   ❌ Failed: 0/5

🎯 OVERALL RESULTS:
   📊 Total submissions: 20
   ✅ Total successful: 20
   ❌ Total failed: 0
   📈 Success rate: 100%
```

### Load Testing Output
```
🔥 IAC Website Form Load Testing Suite
================================================================================

🧪 TEST 1/3: Registration Form - Light Load
================================================================================
🚀 Starting sequential load test
📍 Endpoint: /contact_us/register
📊 Total requests: 20
⏱️  Delay between requests: 200ms

✅ Request   1:  245ms (200)
✅ Request   2:  189ms (200)
✅ Request   3:  234ms (200)

📊 REGISTRATION FORM - LIGHT LOAD TEST RESULTS
============================================================
📦 Total requests: 20
✅ Successful: 20
❌ Failed: 0
📈 Success rate: 100.00%
⏱️  Total duration: 6789ms
⚡ Requests per second: 2.95
📊 Average response time: 215.40ms

🎯 PERFORMANCE ASSESSMENT:
✅ Reliability: EXCELLENT (100.0% success rate)
✅ Speed: EXCELLENT (215ms average)
⚠️  Throughput: GOOD (2.9 req/sec)
```

## 🛠️ Customization

### Adding New Form Variations

1. **Edit** `scripts/bulk-form-test.js`
2. **Add** new variation to `generateVariationData`
3. **Include** realistic test data
4. **Test** the new variation

Example:
```javascript
// Add to generateVariationData.registration
{
  name: 'Custom Student Scenario',
  data: {
    studentName: 'Custom Student Name',
    grade: '2nd Grade',
    // ... other fields
  }
}
```

### Modifying Load Test Parameters

Edit `scripts/load-test.js`:
```javascript
// Increase concurrent requests
const concurrency = 20  // Default: 10

// Increase total requests
const requests = 200    // Default: 100

// Adjust delays
const delay = 50        // Default: 100ms
```

### Custom API Endpoints

Add new endpoints to test:
```javascript
// In any test script
const customEndpoint = '/api/custom/endpoint'
const customData = { /* your data */ }

await submitForm(customEndpoint, customData, 'Custom Test')
```

## 🚨 Prerequisites

1. **Development server must be running**: `npm run dev`
2. **Environment variables configured**: Check `.env.local`
3. **API endpoints functional**: Ensure all routes work manually first

## 🔍 Troubleshooting

### Common Issues

**❌ Connection errors**
```bash
# Ensure dev server is running
npm run dev
```

**❌ Email sending failures**
```bash
# Check environment variables
cat .env.local
```

**❌ Validation errors**
```bash
# Check API route implementation
# Verify required fields match form requirements
```

### Debugging Options

**Verbose output**:
```bash
DEBUG=* npm run test:bulk
```

**Single form testing**:
```bash
node -e "
const { submitForm, generateVariationData } = require('./scripts/bulk-form-test.js');
const data = generateVariationData.contact[0];
submitForm('/contact_us', data.data, data.name).then(console.log);
"
```

**Manual API testing**:
```bash
curl -X POST http://localhost:3000/api/contact_us \\
  -H 'Content-Type: application/json' \\
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","inquiryType":"General question","message":"Test"}'
```

## 📈 Performance Benchmarks

### Expected Performance
- **Response Time**: < 500ms average
- **Success Rate**: > 95%
- **Throughput**: > 5 requests/second
- **Concurrent Handling**: 10+ simultaneous requests

### Performance Indicators
- ✅ **Excellent**: < 300ms response, > 98% success
- ⚠️ **Good**: < 500ms response, > 95% success
- ❌ **Poor**: > 1000ms response, < 90% success

## 🎯 Best Practices

1. **Always test with dev server running**
2. **Run bulk tests during off-peak hours**
3. **Monitor server logs during load testing**
4. **Start with quick tests before full suites**
5. **Check email delivery after testing**
6. **Verify database entries if applicable**

---

**Happy Testing! 🧪** These scripts provide comprehensive form testing capabilities to ensure your IAC website forms handle real-world usage patterns reliably.
