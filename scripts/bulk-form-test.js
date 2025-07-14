/**
 * Bulk Form Submission Testing Script
 * Sends multiple form submissions with various data variations for each form
 * Run with: node scripts/bulk-form-test.js
 */

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api'

// Enhanced data generators with variations
const generateVariationData = {
  // Registration form variations
  registration: [
    // Variation 1: Kindergarten student
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
    // Variation 2: 5th Grade student
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
    // Variation 3: 3rd Grade student
    {
      name: '3rd Grade Student - Diverse Programs',
      data: {
        studentName: 'Sophia Chen',
        preferredName: 'Sophie',
        grade: '3rd Grade',
        teacherName: 'Mrs. Garcia',
        afterClassCare: 'Yes',
        elementarySchool: 'Lincoln Elementary',
        classTypes: ['chess', 'dance', 'performing_arts'],
        parentName: 'Lisa Chen',
        phoneNumber: '714-555-0345',
        emailAddress: 'lisa.chen@email.com',
        alternateContactName: 'James Chen',
        alternateContactPhone: '714-555-0346',
        paymentType: 'monthly',
        iacAuthorization: true,
      }
    },
    // Variation 4: 1st Grade student
    {
      name: '1st Grade Student - Single Program',
      data: {
        studentName: 'Aiden Martinez',
        preferredName: 'Aiden',
        grade: '1st Grade',
        teacherName: 'Ms. Kim',
        afterClassCare: 'No',
        elementarySchool: 'Washington Elementary',
        classTypes: ['comic_book'],
        parentName: 'Rosa Martinez',
        phoneNumber: '714-555-0456',
        emailAddress: 'rosa.martinez@email.com',
        alternateContactName: '',
        alternateContactPhone: '',
        paymentType: 'monthly',
        iacAuthorization: true,
      }
    },
    // Variation 5: 4th Grade student - All programs
    {
      name: '4th Grade Student - Maximum Programs',
      data: {
        studentName: 'Isabella Davis',
        preferredName: 'Izzy',
        grade: '4th Grade',
        teacherName: 'Mr. Anderson',
        afterClassCare: 'Yes',
        elementarySchool: 'Roosevelt Elementary',
        classTypes: ['arts_and_crafts', 'chess', 'creative_writing', 'dance', 'soccer', 'volleyball'],
        parentName: 'Amanda Davis',
        phoneNumber: '714-555-0567',
        emailAddress: 'amanda.davis@email.com',
        alternateContactName: 'Michael Davis',
        alternateContactPhone: '714-555-0568',
        paymentType: 'yearly',
        iacAuthorization: true,
      }
    }
  ],

  // Contact form variations
  contact: [
    // Variation 1: General inquiry from parent
    {
      name: 'Parent General Inquiry',
      data: {
        firstName: 'Sarah',
        lastName: 'Thompson',
        email: 'sarah.thompson@email.com',
        phoneNumber: '714-555-1111',
        inquiryType: 'General question',
        message: 'Hi! I\'m interested in learning more about your after-school programs. My daughter is in 2nd grade and loves art. Do you have any art-focused programs available at Lincoln Elementary?'
      }
    },
    // Variation 2: Program information request
    {
      name: 'Program Information Request',
      data: {
        firstName: 'Robert',
        lastName: 'Kim',
        email: 'robert.kim@email.com',
        phoneNumber: '714-555-2222',
        inquiryType: 'Program information',
        message: 'Could you please provide more details about your chess program? What skill levels do you accommodate, and what is the typical class size?'
      }
    },
    // Variation 3: Registration inquiry
    {
      name: 'Registration Inquiry',
      data: {
        firstName: 'Elena',
        lastName: 'Rodriguez',
        email: 'elena.rodriguez@email.com',
        phoneNumber: '714-555-3333',
        inquiryType: 'Registration inquiry',
        message: 'I would like to register my twin boys for soccer and basketball programs. They are both in 4th grade at Washington Elementary. When does registration open for the spring semester?'
      }
    },
    // Variation 4: School partnership inquiry
    {
      name: 'School Partnership Inquiry',
      data: {
        firstName: 'Dr. Patricia',
        lastName: 'Wilson',
        email: 'p.wilson@schooldistrict.edu',
        phoneNumber: '714-555-4444',
        inquiryType: 'School partnership',
        message: 'I am the principal at Jefferson Elementary and we are interested in partnering with IAC to bring after-school programs to our campus. Could we schedule a meeting to discuss options?'
      }
    },
    // Variation 5: Employment inquiry
    {
      name: 'Employment Inquiry',
      data: {
        firstName: 'Miguel',
        lastName: 'Santos',
        email: 'miguel.santos@email.com',
        phoneNumber: '714-555-5555',
        inquiryType: 'Employment opportunity',
        message: 'I have a background in elementary education and coaching youth soccer. Are there any instructor positions available? I would love to contribute to your programs.'
      }
    }
  ],

  // Application form variations
  application: [
    // Variation 1: Elementary teacher applying
    {
      name: 'Elementary Teacher Application',
      data: {
        firstName: 'Jessica',
        lastName: 'Brown',
        email: 'jessica.brown@email.com',
        phoneNumber: '714-555-6666',
        city: 'Anaheim',
        state: 'CA',
        positionsInterest: ['instructor'],
        availabilityDays: ['monday', 'tuesday', 'wednesday', 'thursday'],
        wednesdayAcknowledgment: true,
        experience: 'I have been teaching 3rd grade for 5 years and have experience with after-school tutoring programs.',
        message: 'I am passionate about providing enriching educational experiences for children beyond the regular school day.',
        resume: 'Jessica_Brown_Resume.pdf',
        coverLetter: 'Cover letter content here...',
        chessExperience: 'Basic knowledge',
        adminExperience: 'None',
        classroomManagementExperience: 'Yes - 5 years teaching experience',
        soccerExperience: 'Yes - volunteer youth coach',
        basketballExperience: 'Basic knowledge',
        volleyballExperience: 'None',
        flagFootballExperience: 'None',
        creativeWritingExperience: 'Yes - integrated into teaching',
        performingArtsExperience: 'Basic knowledge from teaching',
        artsCraftsExperience: 'Yes - classroom activities',
        publicSpeakingExperience: 'Yes - teaching and presentations',
        comicBookExperience: 'None',
        substituteExperience: 'Yes - 2 years',
        childrenExperience: 'Yes - 5 years teaching',
      }
    },
    // Variation 2: College student applying
    {
      name: 'College Student Application',
      data: {
        firstName: 'Alex',
        lastName: 'Miller',
        email: 'alex.miller@email.com',
        phoneNumber: '714-555-7777',
        city: 'Fullerton',
        state: 'CA',
        positionsInterest: ['assistant'],
        availabilityDays: ['monday', 'wednesday', 'friday'],
        wednesdayAcknowledgment: true,
        experience: 'Currently studying Elementary Education at Cal State Fullerton.',
        message: 'Working with IAC would provide valuable hands-on experience in my field of study.',
        resume: 'Alex_Miller_Resume.pdf',
        coverLetter: 'Cover letter content here...',
        chessExperience: 'None',
        adminExperience: 'None',
        classroomManagementExperience: 'Limited - volunteer work',
        soccerExperience: 'Basic knowledge',
        basketballExperience: 'Yes - recreational level',
        volleyballExperience: 'None',
        flagFootballExperience: 'None',
        creativeWritingExperience: 'Yes - college coursework',
        performingArtsExperience: 'None',
        artsCraftsExperience: 'Basic level',
        publicSpeakingExperience: 'Yes - class presentations',
        comicBookExperience: 'Personal interest',
        substituteExperience: 'None',
        childrenExperience: 'Yes - babysitting and camp volunteer',
      }
    },
    // Variation 3: Retired professional applying
    {
      name: 'Retired Professional Application',
      data: {
        firstName: 'Richard',
        lastName: 'Anderson',
        email: 'richard.anderson@email.com',
        phoneNumber: '714-555-8888',
        city: 'Garden Grove',
        state: 'CA',
        positionsInterest: ['instructor'],
        availabilityDays: ['tuesday', 'thursday'],
        wednesdayAcknowledgment: true,
        experience: 'Recently retired from a 30-year career in engineering.',
        message: 'I want to use my retirement to give back to the community and share my love of chess.',
        resume: 'Richard_Anderson_Resume.pdf',
        coverLetter: 'Cover letter content here...',
        chessExperience: 'Yes - teaching at community center for 3 years',
        adminExperience: 'Yes - 10 years as engineering manager',
        classroomManagementExperience: 'Limited - volunteer teaching',
        soccerExperience: 'None',
        basketballExperience: 'None',
        volleyballExperience: 'None',
        flagFootballExperience: 'None',
        creativeWritingExperience: 'None',
        performingArtsExperience: 'None',
        artsCraftsExperience: 'Basic level',
        publicSpeakingExperience: 'Yes - engineering presentations',
        comicBookExperience: 'None',
        substituteExperience: 'None',
        childrenExperience: 'Yes - teaching chess to children',
      }
    }
  ],

  // Feedback form variations
  feedback: [
    // Variation 1: Very positive feedback
    {
      name: 'Very Positive Parent Feedback',
      data: {
        anonymous: false,
        contactBack: true,
        name: 'Linda Garcia',
        email: 'linda.garcia@email.com',
        participationType: 'parent',
        program: 'Arts and Crafts',
        school: 'Arroyo Elementary',
        overallRating: 'very_satisfied',
        feedbackType: ['positive', 'suggestion'],
        specificAreas: ['instruction_quality', 'program_content'],
        programSuggestions: 'Maybe offer weekend workshops for families to participate together?',
        staffRecognition: 'The instructors are so patient and creative.',
        improvements: 'More variety in art techniques would be great.',
        additionalComments: 'My daughter absolutely loves the art program! She comes home excited every day and has learned so many new techniques. The showcase at the end of the semester was amazing!'
      }
    },
    // Variation 2: Mixed feedback with suggestions
    {
      name: 'Mixed Feedback with Suggestions',
      data: {
        anonymous: false,
        contactBack: true,
        name: 'Carlos Martinez',
        email: 'carlos.martinez@email.com',
        participationType: 'parent',
        program: 'Chess',
        school: 'Lincoln Elementary',
        overallRating: 'satisfied',
        feedbackType: ['positive', 'suggestion', 'concern'],
        specificAreas: ['instruction_quality', 'program_content', 'communication'],
        programSuggestions: 'It would be great to have more advanced levels available. Also, perhaps organize chess tournaments between different schools.',
        staffRecognition: 'The chess instructor is knowledgeable and engaging.',
        improvements: 'More challenging content for advanced students would be beneficial.',
        additionalComments: 'The chess program has really helped my son with strategic thinking and patience. Overall a good experience, but would love to see more challenging content for advanced students.'
      }
    },
    // Variation 3: Anonymous feedback
    {
      name: 'Anonymous Feedback',
      data: {
        anonymous: true,
        contactBack: false,
        participationType: 'parent',
        program: 'Soccer',
        school: 'Washington Elementary',
        overallRating: 'very_satisfied',
        feedbackType: ['positive', 'suggestion'],
        specificAreas: ['instruction_quality', 'communication'],
        programSuggestions: 'Better communication about weather cancellations would be helpful.',
        staffRecognition: 'The soccer coaches are enthusiastic and supportive.',
        improvements: 'Weather communication could be improved.',
        additionalComments: 'The soccer program is fantastic! My child has improved so much and made great friends. Keep up the great work!'
      }
    }
  ],

  // Request school form variations
  requestSchool: [
    // Variation 1: Large elementary school
    {
      name: 'Large Elementary School Request',
      data: {
        firstName: 'Margaret',
        lastName: 'Johnson',
        email: 'mjohnson@district.edu',
        phone: '714-555-9999',
        schoolName: 'Sunshine Elementary School',
        principalName: 'Dr. Margaret Johnson',
        schoolEmail: 'mjohnson@district.edu',
        gradeLevels: ['k', '1st', '2nd', '3rd', '4th', '5th'],
        interestedPrograms: ['arts_and_crafts', 'chess', 'soccer', 'basketball'],
        additionalInfo: 'Our school serves a diverse population of 600 students. We are particularly interested in programs that can help bridge the achievement gap and provide enrichment opportunities for all students. We need programs that can accommodate large numbers of students and help with our STEAM initiatives.'
      }
    },
    // Variation 2: Small charter school
    {
      name: 'Small Charter School Request',
      data: {
        firstName: 'Maria',
        lastName: 'Gonzalez',
        email: 'maria.g@charterschool.org',
        phone: '714-555-0001',
        schoolName: 'Innovation Charter Academy',
        principalName: 'Maria Gonzalez',
        schoolEmail: 'maria.g@charterschool.org',
        gradeLevels: ['k', '1st', '2nd', '3rd'],
        interestedPrograms: ['creative_writing', 'performing_arts', 'chess'],
        additionalInfo: 'We are a small, tight-knit school community focused on innovative education. We would love to partner with IAC to expand our enrichment offerings. Programs that support our project-based learning approach and can work with smaller class sizes would be ideal.'
      }
    }
  ],

  // Request parent/student form variations
  requestParentStudent: [
    // Variation 1: Parent advocating for art program
    {
      name: 'Parent Art Program Advocacy',
      data: {
        name: 'Jennifer Lee',
        grades: '2nd Grade - Chloe Lee',
        school: 'Maple Elementary School',
        principal: 'Principal Smith',
        contactInfo: 'jennifer.lee@email.com, 714-555-0002',
        message: 'My daughter is very artistic and would benefit greatly from arts and crafts and creative writing programs. Several other parents at our school have expressed interest as well. The school administration seems open to the idea.'
      }
    },
    // Variation 2: Parent advocating for sports programs
    {
      name: 'Parent Sports Program Advocacy',
      data: {
        name: 'Tom Wilson',
        grades: '5th Grade - Jake Wilson',
        school: 'Oak Elementary School',
        principal: 'Principal Davis',
        contactInfo: 'tom.wilson@email.com, 714-555-0003',
        message: 'Our school needs more physical activity options after school. Many students would benefit from structured sports programs like soccer, basketball, and flag football. I am willing to help coordinate with the school administration.'
      }
    }
  ]
}

// Utility functions
function getRandomDelay() {
  return Math.floor(Math.random() * 3000) + 1000 // 1-4 seconds
}

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Enhanced submission function with retry logic
async function submitForm(endpoint, data, description, retries = 3) {
  console.log(`\\n🚀 Submitting: ${description}`)
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

      const responseData = await response.text()
      
      console.log(`📊 Status: ${response.status} ${response.statusText}`)
      
      if (response.ok) {
        console.log(`✅ SUCCESS: ${description}`)
        return { success: true, status: response.status, data: responseData }
      } else {
        console.log(`❌ FAILED: ${description} (Attempt ${attempt}/${retries})`)
        if (attempt === retries) {
          return { success: false, status: response.status, error: responseData }
        }
      }
    } catch (error) {
      console.log(`💥 ERROR: ${error.message} (Attempt ${attempt}/${retries})`)
      if (attempt === retries) {
        return { success: false, error: error.message }
      }
    }
    
    if (attempt < retries) {
      await delay(getRandomDelay())
    }
  }
}

// Main bulk testing function
async function runBulkFormTests() {
  console.log('🎯 Starting Bulk Form Submission Tests')
  console.log(`🌐 Base URL: ${API_BASE_URL}`)
  console.log('='.repeat(80))
  
  const startTime = Date.now()
  const results = {
    registration: [],
    contact: [],
    application: [],
    feedback: [],
    requestSchool: [],
    requestParentStudent: []
  }
  
  // Test Registration Forms
  console.log('\\n📝 TESTING REGISTRATION FORM VARIATIONS')
  console.log('-'.repeat(50))
  
  for (const variation of generateVariationData.registration) {
    const result = await submitForm(
      '/contact_us/register',
      variation.data,
      `Registration: ${variation.name}`
    )
    results.registration.push({ ...result, name: variation.name })
    await delay(getRandomDelay())
  }
  
  // Test Contact Forms
  console.log('\\n📞 TESTING CONTACT FORM VARIATIONS')
  console.log('-'.repeat(50))
  
  for (const variation of generateVariationData.contact) {
    const result = await submitForm(
      '/contact_us',
      variation.data,
      `Contact: ${variation.name}`
    )
    results.contact.push({ ...result, name: variation.name })
    await delay(getRandomDelay())
  }
  
  // Test Application Forms
  console.log('\\n💼 TESTING APPLICATION FORM VARIATIONS')
  console.log('-'.repeat(50))
  
  for (const variation of generateVariationData.application) {
    const result = await submitForm(
      '/contact_us/apply',
      variation.data,
      `Application: ${variation.name}`
    )
    results.application.push({ ...result, name: variation.name })
    await delay(getRandomDelay())
  }
  
  // Test Feedback Forms
  console.log('\\n📋 TESTING FEEDBACK FORM VARIATIONS')
  console.log('-'.repeat(50))
  
  for (const variation of generateVariationData.feedback) {
    const result = await submitForm(
      '/contact_us/provide_feedback',
      variation.data,
      `Feedback: ${variation.name}`
    )
    results.feedback.push({ ...result, name: variation.name })
    await delay(getRandomDelay())
  }
  
  // Test Request School Forms
  console.log('\\n🏫 TESTING REQUEST SCHOOL FORM VARIATIONS')
  console.log('-'.repeat(50))
  
  for (const variation of generateVariationData.requestSchool) {
    const result = await submitForm(
      '/contact_us/request_us',
      variation.data,
      `Request School: ${variation.name}`
    )
    results.requestSchool.push({ ...result, name: variation.name })
    await delay(getRandomDelay())
  }
  
  // Test Request Parent/Student Forms
  console.log('\\n👨‍👩‍👧‍👦 TESTING REQUEST PARENT/STUDENT FORM VARIATIONS')
  console.log('-'.repeat(50))
  
  for (const variation of generateVariationData.requestParentStudent) {
    const result = await submitForm(
      '/contact_us/request_parent_student',
      variation.data,
      `Request Parent/Student: ${variation.name}`
    )
    results.requestParentStudent.push({ ...result, name: variation.name })
    await delay(getRandomDelay())
  }
  
  // Calculate and display summary
  const endTime = Date.now()
  const totalTime = Math.round((endTime - startTime) / 1000)
  
  console.log('\\n📊 BULK TEST SUMMARY')
  console.log('='.repeat(80))
  console.log(`⏱️  Total execution time: ${totalTime} seconds`)
  console.log(`🌐 API Base URL: ${API_BASE_URL}`)
  
  let totalSubmissions = 0
  let totalSuccessful = 0
  
  Object.entries(results).forEach(([formType, formResults]) => {
    const successful = formResults.filter(r => r.success).length
    const total = formResults.length
    totalSubmissions += total
    totalSuccessful += successful
    
    console.log(`\\n📝 ${formType.toUpperCase()}:`)
    console.log(`   ✅ Successful: ${successful}/${total}`)
    console.log(`   ❌ Failed: ${total - successful}/${total}`)
    
    formResults.forEach(result => {
      const status = result.success ? '✅' : '❌'
      console.log(`   ${status} ${result.name}`)
    })
  })
  
  console.log(`\\n🎯 OVERALL RESULTS:`)
  console.log(`   📊 Total submissions: ${totalSubmissions}`)
  console.log(`   ✅ Total successful: ${totalSuccessful}`)
  console.log(`   ❌ Total failed: ${totalSubmissions - totalSuccessful}`)
  console.log(`   📈 Success rate: ${Math.round((totalSuccessful / totalSubmissions) * 100)}%`)
  
  // Generate detailed report
  console.log('\\n📋 DETAILED RESULTS BY FORM TYPE:')
  console.log('='.repeat(80))
  
  Object.entries(results).forEach(([formType, formResults]) => {
    console.log(`\\n${formType.toUpperCase()} FORM RESULTS:`)
    formResults.forEach((result, index) => {
      console.log(`\\n  ${index + 1}. ${result.name}`)
      console.log(`     Status: ${result.success ? 'SUCCESS' : 'FAILED'}`)
      console.log(`     HTTP Status: ${result.status || 'N/A'}`)
      if (!result.success && result.error) {
        console.log(`     Error: ${result.error.substring(0, 100)}...`)
      }
    })
  })
  
  console.log('\\n🏁 Bulk form submission testing complete!')
  
  // Exit with appropriate code
  if (totalSuccessful < totalSubmissions) {
    console.log('\\n⚠️  Some submissions failed. Check server logs for details.')
    process.exit(1)
  } else {
    console.log('\\n🎉 All submissions successful!')
    process.exit(0)
  }
}

// Random testing function
async function runRandomizedTests(numberOfSubmissions = 20) {
  console.log(`🎲 Starting ${numberOfSubmissions} randomized form submissions`)
  console.log('='.repeat(80))
  
  const allVariations = []
  
  // Collect all variations with their endpoints
  Object.entries(generateVariationData).forEach(([formType, variations]) => {
    const endpoint = {
      registration: '/contact_us/register',
      contact: '/contact_us',
      application: '/contact_us/apply',
      feedback: '/contact_us/provide_feedback',
      requestSchool: '/contact_us/request_us',
      requestParentStudent: '/contact_us/request_parent_student'
    }[formType]
    
    variations.forEach(variation => {
      allVariations.push({
        formType,
        endpoint,
        ...variation
      })
    })
  })
  
  // Randomize the order
  const randomizedVariations = shuffleArray(allVariations).slice(0, numberOfSubmissions)
  
  const results = []
  
  for (let i = 0; i < randomizedVariations.length; i++) {
    const variation = randomizedVariations[i]
    console.log(`\\n[${i + 1}/${numberOfSubmissions}] ${variation.formType.toUpperCase()}: ${variation.name}`)
    
    const result = await submitForm(
      variation.endpoint,
      variation.data,
      `${variation.formType}: ${variation.name}`
    )
    
    results.push({
      ...result,
      formType: variation.formType,
      name: variation.name
    })
    
    // Random delay between submissions
    await delay(getRandomDelay())
  }
  
  // Summary
  const successful = results.filter(r => r.success).length
  console.log(`\\n🎯 RANDOMIZED TEST SUMMARY:`)
  console.log(`   📊 Total: ${results.length}`)
  console.log(`   ✅ Successful: ${successful}`)
  console.log(`   ❌ Failed: ${results.length - successful}`)
  console.log(`   📈 Success rate: ${Math.round((successful / results.length) * 100)}%`)
}

// CLI argument parsing
const args = process.argv.slice(2)
const isRandomized = args.includes('--random')
const randomCount = args.find(arg => arg.startsWith('--count='))?.split('=')[1]

// Error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})

// Main execution
if (require.main === module) {
  if (isRandomized) {
    const count = randomCount ? parseInt(randomCount) : 20
    runRandomizedTests(count).catch(error => {
      console.error('💥 Randomized test suite failed:', error)
      process.exit(1)
    })
  } else {
    runBulkFormTests().catch(error => {
      console.error('💥 Bulk test suite failed:', error)
      process.exit(1)
    })
  }
}

module.exports = {
  generateVariationData,
  submitForm,
  runBulkFormTests,
  runRandomizedTests
}
