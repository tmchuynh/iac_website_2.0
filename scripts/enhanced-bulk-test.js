/**
 * Enhanced Bulk Form Submission Testing Script
 * Sends multiple form submissions with correct field mappings for each API endpoint
 * Run with: node scripts/enhanced-bulk-test.js
 */

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api'

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
}

// Enhanced data generators with correct API field mappings
const generateVariationData = {
  // Registration form variations (API: /contact_us/register)
  registration: [
    {
      name: 'Kindergarten Student - Arts Focus',
      data: {
        studentName: 'Emma Johnson',
        preferredName: 'Emmy',
        grade: 'Kindergarten',
        teacherName: 'Ms. Rodriguez',
        afterClassCare: 'Yes',
        elementarySchool: 'Arroyo Elementary',
        classTypes: ['arts_and_crafts', 'creative_writing'],
        parentName: 'Maria Johnson',
        phoneNumber: '714-555-0123',
        emailAddress: 'maria.johnson@email.com',
        alternateContactName: 'Carlos Johnson',
        alternateContactPhone: '714-555-0124',
        paymentType: 'monthly',
        iacAuthorization: true,
      }
    },
    {
      name: '5th Grade Student - Sports Focus',
      data: {
        studentName: 'Marcus Williams',
        preferredName: 'Mark',
        grade: '5th Grade',
        teacherName: 'Mr. Thompson',
        afterClassCare: 'No',
        elementarySchool: 'Brookhurst Elementary',
        classTypes: ['soccer', 'flag_football', 'basketball'],
        parentName: 'Jennifer Williams',
        phoneNumber: '714-555-0234',
        emailAddress: 'j.williams@email.com',
        alternateContactName: 'David Williams',
        alternateContactPhone: '714-555-0235',
        paymentType: 'yearly',
        iacAuthorization: true,
      }
    },
    {
      name: '3rd Grade Student - Mixed Programs',
      data: {
        studentName: 'Sofia Rodriguez',
        preferredName: 'Sofi',
        grade: '3rd Grade',
        teacherName: 'Mrs. Kim',
        afterClassCare: 'Yes',
        elementarySchool: 'Washington Elementary',
        classTypes: ['chess', 'dance', 'performing_arts'],
        parentName: 'Luis Rodriguez',
        phoneNumber: '714-555-0345',
        emailAddress: 'luis.rodriguez@email.com',
        alternateContactName: 'Ana Rodriguez',
        alternateContactPhone: '714-555-0346',
        paymentType: 'monthly',
        iacAuthorization: true,
      }
    }
  ],

  // Contact form variations (API: /contact_us)
  contact: [
    {
      name: 'General Program Inquiry',
      data: {
        firstName: 'Sarah',
        lastName: 'Thompson',
        email: 'sarah.thompson@email.com',
        phoneNumber: '714-555-1001',
        inquiryType: 'Program information',
        message: 'Hi! I\'m interested in learning more about your after-school programs for my 2nd grader. What programs are available at Roosevelt Elementary?'
      }
    },
    {
      name: 'Partnership Inquiry',
      data: {
        firstName: 'Michael',
        lastName: 'Chen',
        email: 'michael.chen@email.com',
        phoneNumber: '714-555-1002',
        inquiryType: 'School partnership',
        message: 'I\'m the principal at Lincoln Elementary and we\'re interested in bringing IAC programs to our school. Could we schedule a meeting to discuss this?'
      }
    },
    {
      name: 'Employment Question',
      data: {
        firstName: 'Jessica',
        lastName: 'Martinez',
        email: 'jessica.martinez@email.com',
        phoneNumber: '714-555-1003',
        inquiryType: 'Employment opportunity',
        message: 'I have a background in elementary education and am interested in instructor positions. What qualifications are you looking for?'
      }
    }
  ],

  // Request School form variations (API: /contact_us/request_us)
  // Based on actual API expectations: firstName, lastName, email, phone, schoolName, principalName, schoolEmail, gradeLevels, interestedPrograms, additionalInfo
  requestSchool: [
    {
      name: 'Large Elementary School Request',
      data: {
        firstName: 'Patricia',
        lastName: 'Davis',
        email: 'patricia.davis@oakwoodelem.edu',
        phone: '714-555-2001',
        schoolName: 'Oakwood Elementary School',
        principalName: 'Dr. Patricia Davis',
        schoolEmail: 'office@oakwoodelem.edu',
        gradeLevels: ['k', '1st', '2nd', '3rd', '4th', '5th'],
        interestedPrograms: ['soccer', 'arts_and_crafts', 'chess', 'creative_writing'],
        additionalInfo: 'We are a large elementary school with 600+ students. We are looking to expand our after-school offerings and believe IAC programs would be a great fit for our diverse student body.'
      }
    },
    {
      name: 'Small Charter School Request',
      data: {
        firstName: 'Robert',
        lastName: 'Kim',
        email: 'r.kim@innovationcharter.org',
        phone: '714-555-2002',
        schoolName: 'Innovation Charter Academy',
        principalName: 'Robert Kim',
        schoolEmail: 'admin@innovationcharter.org',
        gradeLevels: ['k', '1st', '2nd', '3rd'],
        interestedPrograms: ['creative_writing', 'performing_arts', 'chess'],
        additionalInfo: 'We are a small, project-based learning charter school with about 120 students. We would love to partner with IAC to provide enrichment programs that align with our innovative approach to education.'
      }
    },
    {
      name: 'Title I School Request',
      data: {
        firstName: 'Maria',
        lastName: 'Santos',
        email: 'maria.santos@riversideelem.edu',
        phone: '714-555-2003',
        schoolName: 'Riverside Elementary School',
        principalName: 'Maria Santos',
        schoolEmail: 'principal@riversideelem.edu',
        gradeLevels: ['k', '1st', '2nd', '3rd', '4th', '5th'],
        interestedPrograms: ['soccer', 'basketball', 'arts_and_crafts', 'dance'],
        additionalInfo: 'We are a Title I school serving a predominantly low-income community. These programs would provide valuable opportunities for our students who may not otherwise have access to such enrichment activities.'
      }
    }
  ],

  // Request Parent/Student form variations (API: /contact_us/request_parent_student)
  // Based on actual API expectations: name, grades, school, principal, contactInfo, message
  requestParentStudent: [
    {
      name: 'Parent Art Program Advocacy',
      data: {
        name: 'Jennifer Lee (Parent of Chloe Lee, 2nd Grade)',
        grades: '2nd Grade',
        school: 'Maple Elementary School',
        principal: 'Mrs. Susan Johnson',
        contactInfo: 'jennifer.lee@email.com / 714-555-3001',
        message: 'My daughter Chloe is very artistic and would benefit greatly from arts and crafts programs. Several other parents at our school have expressed interest as well. The school administration seems open to the idea. Could IAC consider bringing programs to Maple Elementary?'
      }
    },
    {
      name: 'Parent Sports Program Advocacy',
      data: {
        name: 'Tom Wilson (Parent of Jake Wilson, 5th Grade)',
        grades: '5th Grade',
        school: 'Oak Elementary School',
        principal: 'Mr. David Chen',
        contactInfo: 'tom.wilson@email.com / 714-555-3002',
        message: 'Our school needs more physical activity options after school. Many students, including my son Jake, would benefit from structured sports programs like soccer and basketball. I am willing to help coordinate with the school administration to make this happen.'
      }
    },
    {
      name: 'Parent Academic Enhancement Request',
      data: {
        name: 'Rachel Green (Parent of Emma Green, 4th Grade)',
        grades: '4th Grade',
        school: 'Pine Valley Elementary',
        principal: 'Dr. Lisa Brown',
        contactInfo: 'rachel.green@email.com / 714-555-3003',
        message: 'I believe my daughter Emma and her classmates would greatly benefit from chess and creative writing programs. These would complement the school\'s academic focus and provide intellectual challenges beyond regular classroom activities.'
      }
    }
  ],

  // Application form variations (API: /contact_us/apply)
  application: [
    {
      name: 'Experienced Teacher Application',
      data: {
        firstName: 'Amanda',
        lastName: 'Rodriguez',
        email: 'amanda.rodriguez@email.com',
        phoneNumber: '714-555-4001',
        address: '123 Teacher Lane',
        city: 'Anaheim',
        state: 'CA',
        zipCode: '92801',
        dateOfBirth: '1985-03-15',
        positionsInterested: ['instructor'],
        availability: ['monday', 'tuesday', 'wednesday', 'thursday'],
        preferredLocations: ['arroyo', 'brookhurst', 'washington'],
        educationLevel: 'masters',
        relevantExperience: 'I have been teaching 3rd grade for 8 years and have experience running after-school programs focused on arts and crafts. I hold a Master\'s in Elementary Education and am passionate about providing enriching experiences for children.',
        whyInterested: 'I love working with children and want to expand my impact beyond the regular classroom. IAC\'s mission aligns perfectly with my belief that all children deserve access to quality enrichment programs.',
        backgroundCheck: true,
        references: true,
      }
    },
    {
      name: 'College Student Application',
      data: {
        firstName: 'Alex',
        lastName: 'Miller',
        email: 'alex.miller@email.com',
        phoneNumber: '714-555-4002',
        address: '456 College Ave',
        city: 'Fullerton',
        state: 'CA',
        zipCode: '92832',
        dateOfBirth: '2001-08-22',
        positionsInterested: ['assistant_instructor'],
        availability: ['monday', 'wednesday', 'friday'],
        preferredLocations: ['washington', 'roosevelt'],
        educationLevel: 'some_college',
        relevantExperience: 'Currently studying Elementary Education at Cal State Fullerton. I have experience babysitting and volunteering at summer camps for children ages 5-12.',
        whyInterested: 'Working with IAC would provide valuable hands-on experience in my field of study while allowing me to make a positive impact on children\'s lives.',
        backgroundCheck: true,
        references: true,
      }
    },
    {
      name: 'Retired Professional Application',
      data: {
        firstName: 'Richard',
        lastName: 'Anderson',
        email: 'richard.anderson@email.com',
        phoneNumber: '714-555-4003',
        address: '789 Pine Road',
        city: 'Garden Grove',
        state: 'CA',
        zipCode: '92840',
        dateOfBirth: '1955-11-30',
        positionsInterested: ['instructor'],
        availability: ['tuesday', 'thursday'],
        preferredLocations: ['lincoln', 'washington'],
        educationLevel: 'masters',
        relevantExperience: 'Recently retired from a 30-year career in engineering. I have been teaching chess to children at the local community center for the past 3 years and love working with young minds.',
        whyInterested: 'I want to use my retirement to give back to the community and share my love of chess and problem-solving with children.',
        backgroundCheck: true,
        references: true,
      }
    }
  ],

  // Feedback form variations (API: /contact_us/provide_feedback)
  feedback: [
    {
      name: 'Positive Parent Feedback',
      data: {
        anonymous: false,
        contactBack: true,
        firstName: 'Lisa',
        lastName: 'Wang',
        email: 'lisa.wang@email.com',
        relationship: 'parent',
        overallSatisfaction: 'very_satisfied',
        programQuality: 'excellent',
        staffProfessionalism: 'excellent',
        communication: 'excellent',
        valueForMoney: 'excellent',
        recommendation: 'very_likely',
        positiveComments: 'My daughter absolutely loves the arts and crafts program! The instructors are fantastic and she comes home excited to show me what she created each day.',
        improvementSuggestions: 'Perhaps consider adding more advanced art techniques for students who show particular interest and skill.',
        additionalComments: 'Thank you for providing such wonderful programs for our children. IAC has truly enriched my daughter\'s after-school experience.'
      }
    },
    {
      name: 'Constructive School Feedback',
      data: {
        anonymous: false,
        contactBack: true,
        firstName: 'Mark',
        lastName: 'Johnson',
        email: 'mark.johnson@brookhurstelem.edu',
        relationship: 'school_staff',
        overallSatisfaction: 'satisfied',
        programQuality: 'good',
        staffProfessionalism: 'excellent',
        communication: 'good',
        valueForMoney: 'good',
        recommendation: 'likely',
        positiveComments: 'The programs are well-organized and the staff is professional. Students enjoy the activities and we see good engagement.',
        improvementSuggestions: 'More frequent communication about daily activities would help us better support the program. Also, earlier setup would be helpful.',
        additionalComments: 'We appreciate the partnership and look forward to continuing our relationship with IAC.'
      }
    },
    {
      name: 'Anonymous Feedback',
      data: {
        anonymous: true,
        contactBack: false,
        overallSatisfaction: 'very_satisfied',
        programQuality: 'excellent',
        staffProfessionalism: 'good',
        communication: 'good',
        valueForMoney: 'excellent',
        recommendation: 'very_likely',
        positiveComments: 'The soccer program has been amazing for my child. Great exercise and teamwork skills development.',
        improvementSuggestions: 'Consider having different skill levels within the same program to better accommodate all children.',
        additionalComments: 'Keep up the great work!'
      }
    }
  ]
}

// API endpoint mappings
const endpointMappings = {
  registration: '/contact_us/register',
  contact: '/contact_us',
  requestSchool: '/contact_us/request_us',
  requestParentStudent: '/contact_us/request_parent_student',
  application: '/contact_us/apply',
  feedback: '/contact_us/provide_feedback'
}

// Enhanced API testing function with better error reporting
async function testFormSubmission(endpoint, data, name, retries = 3) {
  console.log(`\\n🚀 Submitting: ${name}`)
  console.log(`📍 Endpoint: ${API_BASE_URL}${endpoint}`)
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const responseText = await response.text()
      let responseData
      
      try {
        responseData = JSON.parse(responseText)
      } catch {
        responseData = responseText
      }
      
      console.log(`📊 Status: ${response.status} ${response.statusText}`)
      
      if (response.ok) {
        console.log(`${colors.green}✅ SUCCESS: ${name}${colors.reset}`)
        return { success: true, status: response.status, data: responseData, attempt }
      } else {
        console.log(`${colors.red}❌ FAILED: ${name} (Attempt ${attempt}/${retries})${colors.reset}`)
        console.log(`📦 Response: ${JSON.stringify(responseData, null, 2)}`)
        console.log(`📝 Sent Data: ${JSON.stringify(data, null, 2)}`)
        
        if (attempt === retries) {
          return { success: false, status: response.status, error: responseData, finalAttempt: true }
        }
      }
    } catch (error) {
      console.log(`${colors.red}💥 ERROR: ${error.message} (Attempt ${attempt}/${retries})${colors.reset}`)
      
      if (attempt === retries) {
        return { success: false, error: error.message, finalAttempt: true }
      }
    }
    
    // Wait between retries
    if (attempt < retries) {
      console.log(`⏳ Waiting 2 seconds before retry...`)
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }
}

// Run all form variations
async function runAllFormTests() {
  console.log(`${colors.cyan}🎯 Starting Enhanced Bulk Form Testing${colors.reset}`)
  console.log(`${colors.cyan}🌐 Base URL: ${API_BASE_URL}${colors.reset}`)
  console.log('='.repeat(80))

  const results = {
    total: 0,
    successful: 0,
    failed: 0,
    details: []
  }

  // Test each form type
  for (const [formType, variations] of Object.entries(generateVariationData)) {
    console.log(`\\n${colors.bright}📝 TESTING ${formType.toUpperCase()} FORMS${colors.reset}`)
    console.log('-'.repeat(60))

    const endpoint = endpointMappings[formType]
    if (!endpoint) {
      console.log(`${colors.red}❌ No endpoint mapping found for ${formType}${colors.reset}`)
      continue
    }

    for (const variation of variations) {
      results.total++
      const result = await testFormSubmission(endpoint, variation.data, `${formType}: ${variation.name}`)
      
      if (result.success) {
        results.successful++
      } else {
        results.failed++
      }
      
      results.details.push({
        formType,
        name: variation.name,
        success: result.success,
        status: result.status,
        attempt: result.attempt
      })

      // Small delay between submissions
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  // Print summary
  console.log(`\\n${colors.bright}📊 ENHANCED BULK TEST SUMMARY${colors.reset}`)
  console.log('='.repeat(80))
  console.log(`📈 Total Tests: ${results.total}`)
  console.log(`${colors.green}✅ Successful: ${results.successful}${colors.reset}`)
  console.log(`${colors.red}❌ Failed: ${results.failed}${colors.reset}`)
  console.log(`📊 Success Rate: ${Math.round((results.successful / results.total) * 100)}%`)

  // Detailed results by form type
  console.log(`\\n${colors.bright}📋 RESULTS BY FORM TYPE${colors.reset}`)
  console.log('-'.repeat(40))
  
  const formTypes = Object.keys(generateVariationData)
  for (const formType of formTypes) {
    const formResults = results.details.filter(r => r.formType === formType)
    const formSuccessful = formResults.filter(r => r.success).length
    const formTotal = formResults.length
    const successRate = Math.round((formSuccessful / formTotal) * 100)
    
    const statusColor = successRate === 100 ? colors.green : successRate >= 50 ? colors.yellow : colors.red
    console.log(`${statusColor}${formType}: ${formSuccessful}/${formTotal} (${successRate}%)${colors.reset}`)
    
    // Show failed tests
    const failedTests = formResults.filter(r => !r.success)
    if (failedTests.length > 0) {
      failedTests.forEach(test => {
        console.log(`  ${colors.red}❌ ${test.name} (${test.status})${colors.reset}`)
      })
    }
  }

  console.log(`\\n${colors.bright}🏁 Enhanced Bulk Testing Complete!${colors.reset}`)
  
  return results
}

// Run specific form type tests
async function runFormTypeTest(formType) {
  const variations = generateVariationData[formType]
  const endpoint = endpointMappings[formType]
  
  if (!variations || !endpoint) {
    console.log(`${colors.red}❌ Unknown form type: ${formType}${colors.reset}`)
    console.log(`Available types: ${Object.keys(generateVariationData).join(', ')}`)
    return
  }

  console.log(`${colors.cyan}🎯 Testing ${formType.toUpperCase()} forms only${colors.reset}`)
  console.log('='.repeat(50))

  let successful = 0
  let total = variations.length

  for (const variation of variations) {
    const result = await testFormSubmission(endpoint, variation.data, `${formType}: ${variation.name}`)
    if (result.success) successful++
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(`\\n${colors.bright}📊 ${formType.toUpperCase()} TEST SUMMARY${colors.reset}`)
  console.log(`✅ Successful: ${successful}/${total}`)
  console.log(`📈 Success rate: ${Math.round((successful / total) * 100)}%`)
}

// Parse command line arguments
const args = process.argv.slice(2)
const command = args[0]

async function main() {
  try {
    if (command === '--help' || command === '-h') {
      console.log(`
${colors.bright}Enhanced Bulk Form Testing Script${colors.reset}

Usage:
  node scripts/enhanced-bulk-test.js [options]

Options:
  --help, -h              Show this help message
  --type <formType>       Test only specific form type
  --list                  List available form types
  --dev                   Use development server (localhost:3000)
  --prod                  Use production server

Form Types:
  registration           Student registration forms
  contact               General contact inquiries  
  requestSchool         School partnership requests
  requestParentStudent  Parent/student advocacy requests
  application           Job applications
  feedback              Program feedback forms

Examples:
  node scripts/enhanced-bulk-test.js
  node scripts/enhanced-bulk-test.js --type registration
  node scripts/enhanced-bulk-test.js --type contact --dev
      `)
      return
    }

    if (command === '--list') {
      console.log(`${colors.bright}Available Form Types:${colors.reset}`)
      Object.keys(generateVariationData).forEach(type => {
        const count = generateVariationData[type].length
        console.log(`  ${colors.cyan}${type}${colors.reset} (${count} variations)`)
      })
      return
    }

    if (command === '--type') {
      const formType = args[1]
      if (!formType) {
        console.log(`${colors.red}❌ Please specify a form type${colors.reset}`)
        return
      }
      await runFormTypeTest(formType)
    } else {
      await runAllFormTests()
    }
  } catch (error) {
    console.error(`${colors.red}💥 Script failed:${colors.reset}`, error)
    process.exit(1)
  }
}

// Error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error(`${colors.red}Unhandled Rejection:${colors.reset}`, reason)
  process.exit(1)
})

// Run the script
if (require.main === module) {
  main()
}

module.exports = { generateVariationData, testFormSubmission, runAllFormTests, runFormTypeTest }
