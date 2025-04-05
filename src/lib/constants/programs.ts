import {
  FaBasketballBall,
  FaBook,
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessQueen,
  FaChessRook,
  FaFootballBall,
  FaMicrophone,
  FaPencilAlt,
  FaTheaterMasks,
  FaUsers,
  FaVolleyballBall,
} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import {
  GiAmericanFootballHelmet,
  GiBasketballJersey,
  GiMicrophone,
  GiWhistle,
} from "react-icons/gi";
import { IoMusicalNotes, IoMusicalNoteSharp } from "react-icons/io5";
import { MdOutlineBrush, MdOutlineFormatQuote, MdTimer } from "react-icons/md";
import { PiDiscoBall, PiSoccerBallFill } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { programInfo } from "../types/information";

export const programs: programInfo[] = [
  {
    title: "Chess",
    icons: [
      FaChessBishop,
      FaChessKing,
      FaChessKnight,
      FaChessQueen,
      FaChessRook,
    ],
    image: "/images/Class_Photos/Chess/chess-44.jpg",
    description:
      "Dive into the world of chess and unleash your potential for strategic mastery, honing your critical thinking and tactical brilliance every step of the way.",
    overview:
      "Our chess program presents a distinguished opportunity for students to embark on a path of intellectual development and cultivate a lasting passion for the game. Chess transcends mere gameplay; it is a sophisticated amalgamation of strategic acumen, critical analysis, and endless intellectual exploration.",
    keypoints: [
      "Fundamental Principles: We introduce students to the core principles of chess, covering the rules, piece movements, and foundational concepts",
      "Strategic Thinking: We emphasize strategic thought processes, guiding students in critical decision-making, move planning, and effective strategy formulation",
      "Tactical Skills and Checkmate Patterns: Students will acquire a range of tactical skills, including forks, pins, and skewers, alongside an understanding of common checkmate patterns critical for game success",
      "Endgame Mastery: Our program delves into endgame strategies, teaching students to capitalize on their advantages and navigate complex endgame scenarios",
      "Chess Notation: We provide instruction on algebraic chess notation, essential for game recording and analysis",
      "Historical and Cultural Insights: Students will explore the rich history and cultural significance of chess, enhancing their appreciation for this ancient and esteemed game",
      "Problem-Solving and Analytical Skills: Chess serves as a powerful tool for developing problem-solving and analytical skills, which students can apply to real-world challenges",
      "Competitions and Tournaments: Students will engage in friendly competitions and tournaments, fostering a spirit of healthy competition and enjoyment",
    ],
    outcome:
      "Participants in our chess program will enhance their problem-solving abilities, critical thinking, and strategic skills, all of which are transferable to various life situations. We maintain a low instructor-to-student ratio and provide carefully designed materials to support ongoing improvement and cognitive development. Our goal is to ignite a profound enthusiasm for chess and positively impact students' educational experiences.",
    goal: "Our chess program is dedicated to cultivating proficient players while fostering lifelong critical thinkers and strategic planners. Beyond mastering the game, our program instills forward-thinking skills, strategic anticipation, and tactical formulation, all of which are invaluable for both academic and personal growth. We strive to inspire a lasting passion for chess, offering an enriching journey of continuous exploration and advancement.",
    images: [
      "/images/Class_Photos/Chess/chess-1.jpg",
      "/images/Class_Photos/Chess/chess-3.jpg",
      "/images/Class_Photos/Chess/chess-5.jpg",
      "/images/Class_Photos/Chess/chess-18.jpg",
      "/images/Class_Photos/Chess/chess-29.jpg",
      "/images/Class_Photos/Chess/chess-34.jpg",
      "/images/Class_Photos/Chess/chess-35.jpg",
      "/images/Class_Photos/Chess/chess-36.jpg",
      "/images/Class_Photos/Chess/chess-37.jpg",
      "/images/Class_Photos/Chess/chess-39.jpg",
      "/images/Class_Photos/Chess/chess-40.jpg",
      "/images/Class_Photos/Chess/chess-43.jpg",
      "/images/Class_Photos/Chess/chess-46.jpg",
    ],
  },
  {
    title: "Basketball",
    icons: [FaBasketballBall, GiBasketballJersey],
    image: "/images/Class_Photos/Basketball/bb-18.jpg",
    description:
      "Master the court with our basketball classes, where skill and strategy come together in an electrifying blend of teamwork and excitement.",
    overview:
      "Our basketball program offers more than a venue for skill enhancement; it serves as a vibrant platform to cultivate a lifelong commitment to the sport. We emphasize not only the development of basketball skills but also the enhancement of teamwork, leadership, and a deep-seated passion for the game.",
    keypoints: [
      "Basketball Fundamentals: We begin with the essential skills of basketball, including dribbling, shooting, passing, and defensive techniques",
      "Team Dynamics: A core aspect of our program is the development of teamwork, emphasizing the importance of collaboration, effective communication, and synergy on the court",
      "Game Strategies: Students will advance to more sophisticated game strategies, covering offensive plays, defensive tactics, and strategic decision-making",
      "Understanding Basketball Rules: Our program ensures students acquire a thorough understanding of basketball rules and regulations, promoting fair and enjoyable play",
      "Leadership and Sportsmanship: We foster leadership qualities and sportsmanship, encouraging students to exhibit these values both on and off the court",
    ],
    outcome:
      "Our program is designed to develop students into proficient athletes and well-rounded individuals, instilling values of teamwork, leadership, and passion that extend beyond the sport. We are dedicated to providing a comprehensive basketball education that supports the personal and athletic growth of each student.",
    goal: "Our primary objective is to empower students with the knowledge, skills, and values necessary for success in basketball and beyond. We aim to equip students with the tools for a prosperous future, enhancing their opportunities and achievements in both their personal and professional lives.",
    images: [
      "/images/Class_Photos/Basketball/bb-4.JPG",
      "/images/Class_Photos/Basketball/bb-2.jpg",
      "/images/Class_Photos/Basketball/bb-5.JPG",
      "/images/Class_Photos/Basketball/bb-6.JPG",
      "/images/Class_Photos/Basketball/bb-9.JPG",
      "/images/Class_Photos/Basketball/bb-18.jpg",
      "/images/Class_Photos/Basketball/bb-11.JPG",
      "/images/Class_Photos/Basketball/bb-12.JPG",
      "/images/Class_Photos/Basketball/bb-1.jpg",
      "/images/Class_Photos/Basketball/bb-3.JPG",
      "/images/Class_Photos/Basketball/bb-13.JPG",
      "/images/Class_Photos/Basketball/bb-14.jpg",
      "/images/Class_Photos/Basketball/bb-15.jpg",
      "/images/Class_Photos/Basketball/bb-16.jpg",
    ],
  },
  {
    title: "Volleyball",
    icons: [FaVolleyballBall, MdTimer],
    image: "/images/Class_Photos/Volleyball/vb-6.JPG",
    description:
      "Set, spike, and serve your way to volleyball mastery, where precision, strategy, and sportsmanship come together for an unbeatable experience.",
    overview:
      "Our core objective is to equip students with fundamental volleyball skills while emphasizing teamwork, strategic play, and an enduring passion for the game.",
    keypoints: [
      "Serving Mastery: Students will master the art of serving, developing both precision and power to start each rally effectively",
      "Bump and Pass Techniques: We emphasize accuracy in bumping and passing, essential for maintaining control and facilitating effective play",
      "Setting and Spiking Skills: Through progressive training, students will refine their setting and spiking abilities, enhancing their capacity to orchestrate attacks and deliver powerful spikes",
      "Net Play and Blocking: We focus on net play and blocking techniques, teaching students how to excel defensively and assert dominance at the net",
      "Tactical Strategies: Students will gain an in-depth understanding of volleyball tactics, including rotations, positions, and team coordination on the court",
      "Sportsmanship and Fair Play: We highlight the importance of sportsmanship, fostering a positive and respectful environment in every game",
    ],
    outcome:
      "Students will develop a comprehensive skill set that encompasses serving, bumping, passing, setting, and spiking, leading to a well-rounded volleyball proficiency. They will learn to apply tactical strategies effectively, enhancing their game awareness and coordination. Mastery of net play and blocking will enable them to perform defensively and contribute significantly to their team's success. Additionally, by emphasizing sportsmanship and fair play, students will cultivate values of respect and teamwork that will benefit them both on and off the court",
    goal: "Our volleyball program aims to produce not only skilled players but also individuals who possess a lifelong passion for the sport. By instilling values of teamwork, discipline, and sportsmanship, we prepare students for success both in volleyball and in their broader lives.",
    images: [
      "/images/Class_Photos/Volleyball/vb-1.JPG",
      "/images/Class_Photos/Volleyball/vb-2.JPG",
      "/images/Class_Photos/Volleyball/vb-3.JPG",
      "/images/Class_Photos/Volleyball/vb-5.JPG",
      "/images/Class_Photos/Volleyball/vb-6.JPG",
    ],
  },
  {
    title: "Flag Football",
    icons: [FaFootballBall, GiAmericanFootballHelmet],
    image: "/images/Class_Photos/Flag_Football/20250402_141937.jpg",
    description:
      "Experience the thrill of flag football, where high energy and teamwork blend seamlessly for an exciting time on the field.",
    overview:
      "Our flag football classes provide an exceptional opportunity for students to develop their athletic skills and foster a lasting enthusiasm for the sport. Flag football combines elements of strategy, teamwork, and physical agility, offering a dynamic and engaging experience for participants.",
    keypoints: [
      "Fundamentals of Flag Football: Students will be introduced to the basic rules and structure of flag football, including how to properly handle the ball, basic footwork, and the objectives of the game",
      "Passing and Receiving Skills: We focus on developing accurate passing techniques and effective receiving skills, essential for advancing the ball and executing successful plays",
      "Running and Offensive Strategies: Students will learn various running techniques and offensive strategies, including route running and creating scoring opportunities",
      "Defensive Tactics and Flag Pulling: Our program emphasizes defensive skills, such as proper flag pulling techniques, positioning, and reading the opponent's plays to effectively defend",
      "Teamwork and Communication: We stress the importance of teamwork and communication on the field, teaching students how to collaborate effectively and support one another during games",
      "Game Situations and Strategy: Students will engage in drills and scrimmages that simulate game situations, helping them apply learned skills and strategies in real-time",
      "Sportsmanship and Fair Play: We promote good sportsmanship, respect for opponents, and fair play, ensuring a positive and inclusive environment for all participants",
    ],
    outcome:
      "Students will gain a well-rounded understanding of flag football, including fundamental skills such as passing, receiving, running, and flag pulling. They will develop strategic thinking and teamwork abilities, which are crucial for both offensive and defensive plays. By participating in game simulations, students will learn to apply their skills in practical situations, enhancing their overall game performance. Emphasis on sportsmanship will help students appreciate the value of fair play and respect in sports.",
    goal: "Our flag football program aims to cultivate skilled players while instilling a lifelong love for the game. We strive to develop not only technical abilities but also essential qualities such as teamwork, discipline, and sportsmanship. Our goal is to provide students with the skills and values that will benefit them both on and off the field, preparing them for future success in sports and in life.",
    images: [],
  },
  {
    title: "Soccer",
    icons: [PiSoccerBallFill, GiWhistle],
    image: "/images/Class_Photos/Soccer/soccer-9.jpg",
    description:
      "Step onto the field and elevate your game, sharpening your skills while embracing the spirit of teamwork and strategic play.",
    overview:
      "Our soccer classes transcend mere skill development; they serve as vibrant platforms for cultivating a lifelong passion for the beautiful game. We are dedicated to providing students with essential soccer skills while emphasizing the significance of teamwork, strategic thinking, and a deep-seated love for the sport.",
    keypoints: [
      "Positional Play: Students will explore various playing positions and their roles on the field, deepening their understanding of team dynamics",
      "Tactical Understanding: We focus on advanced soccer tactics, including offside traps and set pieces, to develop strategic and insightful players",
      "Goalkeeper Training: Specialized training for goalkeepers will cover diving, shot-stopping, and distribution, nurturing future stars in this critical position",
      "Small-Sided Games and Scrimmages: Emphasis on applying skills in game situations through small-sided games and scrimmages, challenging and refining students' abilities",
      "Soccer Etiquette: We promote good sportsmanship, fair play, and respect for opponents, fostering a positive and respectful soccer culture",
    ],
    outcome:
      "Students will acquire a well-rounded set of skills and knowledge that extends beyond technical abilities. They will gain a profound understanding of positional play and tactics, enhancing their strategic insight and game intelligence. Through targeted goalkeeper training, they will develop essential skills for this specialized role. Participation in small-sided games and scrimmages will enable them to apply their skills in realistic scenarios, improving their practical game performance. Additionally, the emphasis on soccer etiquette will instill values of respect, sportsmanship, and teamwork, contributing to their growth as not only proficient players but also exemplary individuals in the sport",
    goal: "Our program is meticulously designed with materials, drills, and resources that align with our curriculum to significantly enhance students' skills. Beyond skill development, our mission is to ignite a lifelong passion for soccer, envisioning a future where students embrace the sport with unwavering enthusiasm, leading to success, teamwork, and triumphant victories on the field.",
    images: [
      "/images/Class_Photos/Soccer/soccer-2.jpg",
      "/images/Class_Photos/Soccer/soccer-3.jpg",
      "/images/Class_Photos/Soccer/soccer-4.jpg",
      "/images/Class_Photos/Soccer/soccer-5.jpg",
      "/images/Class_Photos/Soccer/soccer-6.jpg",
      "/images/Class_Photos/Soccer/soccer-7.jpg",
      "/images/Class_Photos/Soccer/soccer-8.jpg",
      "/images/Class_Photos/Soccer/soccer-9.jpg",
      "/images/Class_Photos/Soccer/soccer-10.jpg",
      "/images/Class_Photos/Soccer/soccer-11.jpg",
      "/images/Class_Photos/Soccer/soccer-12.jpg",
      "/images/Class_Photos/Soccer/soccer-14.jpg",
    ],
  },
  {
    title: "Creative Writing",
    icons: [FaPencil, TfiWrite, MdOutlineFormatQuote],
    image: "/images/Class_Photos/Creative_Writing/20250402_142224.jpg",
    description:
      "Unleash your imagination and bring your ideas to life by transforming them into compelling narratives through the art of writing.",
    overview:
      "Our Creative Writing Classes are designed to transcend conventional writing instruction by fostering creativity and nurturing a lifelong passion for writing. We aim to equip students with essential writing skills for academic success while emphasizing that writing is a profound journey of self-discovery and self-expression",
    keypoints: [
      "Exploring the Functions and Values of Writing: We introduce students to the practical applications of writing, demonstrating how it serves as a crucial skill in both academic and real-world contexts. This exploration helps students appreciate writing's role beyond the classroom",
      "Grammar Mastery: Students will acquire a solid understanding of grammar fundamentals, including correct sentence structure, punctuation, and usage. Mastery of these elements forms the bedrock of effective writing and communication",
      "Writing Prompts and Story Organization: To ignite creativity, students will engage with diverse writing prompts and learn to organize their thoughts into coherent, compelling narratives. We guide them through outlining and structuring stories, emphasizing clarity and creativity",
      "Fostering Artistic Expression: We encourage students to embrace their artistic side by exploring various writing styles and genres. This approach allows them to express themselves through different creative mediums, enhancing their versatility as writers",
      "Stimulating Imagination: Our classes feature exercises and activities designed to stimulate students' imaginations. By encouraging creative thinking and unique story development, we help students expand their narrative possibilities",
      "Verbs and Adjectives in Descriptive Writing: Students will focus on using vivid verbs and descriptive adjectives to enrich their writing. This skill will enable them to craft more engaging, detailed, and evocative narratives",
    ],
    outcome:
      "We are committed to helping students explore the vast landscapes of their thoughts and create vivid imagery with words. Our goal is to inspire a lifelong love of writing, viewing it as a journey that evolves and expands over time. Through this creative process, students will develop the ability to captivate and resonate with others, enhancing their literary and personal expression.",
    goal: "Our commitment extends beyond the classroom, aiming to instill a profound and enduring love for writing that enriches both academic and personal lives. We view writing as a source of solace, a medium for documenting experiences, and a channel for artistic expression. Our program aspires to ignite and sustain each student's creative flame, seeing writing as a canvas for thoughts, emotions, and ideas—a faithful outlet for inner musings and a means of sharing unique perspectives with the world.",
    images: [
      "/images/Class_Photos/Creative_Writing/CW_1.jpg",
      "/images/Class_Photos/Creative_Writing/CW_2.jpg",
    ],
  },
  {
    title: "Public Speaking",
    icons: [FaMicrophone, FaUsers, GiMicrophone],
    image: "/images/public_speaking.jpg",
    description:
      "Master the art of effective communication and captivate your audience with confidence and poise in our public speaking classes",
    overview:
      "Our Public Speaking Classes are designed to empower individuals with the skills and confidence needed to communicate effectively in any setting. Through engaging lessons and practical exercises, we aim to transform public speaking into a powerful tool for self-expression, persuasion, and connection. This program focuses on building communication skills, enhancing confidence, and developing techniques to deliver impactful speeches in various settings.",
    keypoints: [
      "Understanding the Fundamentals of Public Speaking: We introduce students to the principles of effective communication, focusing on clarity, engagement, and audience connection. This foundation helps students build confidence and reduce anxiety",
      "Voice Modulation and Tone: Students will learn how to use their voice as a powerful tool, mastering techniques like modulation, pitch variation, and pacing to convey their message with impact and authenticity",
      "Structuring Compelling Speeches: We guide students in organizing their thoughts into well-structured presentations. This includes crafting engaging introductions, clear main points, and memorable conclusions to leave a lasting impression",
      "Nonverbal Communication: Emphasis is placed on body language, eye contact, and facial expressions to complement verbal delivery and create a strong presence on stage",
      "Impromptu Speaking Skills: Through dynamic exercises, students will practice thinking on their feet, responding to unexpected questions, and delivering speeches without preparation, building confidence for any scenario",
      "Persuasion and Storytelling: Students will explore the art of persuasion and learn how to weave compelling stories into their speeches to captivate and inspire their audience",
    ],
    outcome:
      "Students will confidently deliver clear and impactful speeches, enhancing their communication skills for academic, personal, and professional success. Our classes are designed to help students overcome the fear of public speaking and embrace it as an opportunity to share their voice. By mastering key communication techniques, students will develop the ability to engage and inspire audiences, confidently express their ideas, and leave a lasting impression in any setting.",
    goal: "Beyond mastering the technical skills of public speaking, our program aims to instill a deeper appreciation for the power of words and the importance of authentic communication. We strive to help each student discover their unique voice and use it to connect with others, share their story, and make an impact. Whether presenting in a boardroom, on stage, or in everyday conversations, our goal is to inspire confidence and creativity, empowering students to speak with purpose and passion.",
    images: [],
  },
  {
    title: "Comic Book",
    icons: [FaPencilAlt, FaBook, MdOutlineBrush],
    image: "/images/Class_Photos/Comic_Book/comic-5.jpg",
    description:
      "Dive into the world of storytelling and art by creating your own comic book, blending imagination with illustration",
    overview:
      "This class encourages creativity through the exploration of storytelling, character design, and comic book illustration techniques. This class is designed to celebrate the artistry, creativity, and cultural impact of comic books while fostering a deeper appreciation for the medium. Whether you're a lifelong fan or new to the world of comics, our club is a place to explore, create, and connect.",
    keypoints: [
      "History and Evolution of Comics: Dive into the rich history of comic books, from their golden age origins to modern-day masterpieces. Explore the cultural milestones, iconic creators, and groundbreaking works that have defined the medium",
      "Artistic Techniques: Learn the fundamentals of comic book art, including panel composition, character design, and visual storytelling. Whether you’re sketching superheroes or crafting vibrant settings, this class will sharpen your artistic skills",
      "Scriptwriting and Story Development: Discover the art of writing compelling comic book scripts. From creating dynamic characters to crafting engaging plots, we guide you through the process of bringing your stories to life",
      "Exploring Genres and Themes: Comic books are more than capes and tights. Explore diverse genres such as sci-fi, fantasy, mystery, and slice-of-life, and discuss the themes and narratives that make them resonate with readers",
      "Collaboration and Creation: Team up with fellow club members to create original comic book projects. Share ideas, combine talents, and bring your collective vision to life in a supportive, collaborative environment",
      "Critical Discussions and Reviews: Engage in thoughtful discussions about iconic comic book works, analyzing storytelling techniques, themes, and artistic styles. Develop your ability to critique and appreciate the medium at a deeper level",
    ],
    outcome:
      "Students will create their own comic book, combining storytelling and art skills to bring their unique vision to life. By the end of the class, members will have a comprehensive understanding of the comic book medium, from its artistic and literary elements to its cultural significance. Students will develop skills in storytelling, art, and analysis, while also fostering a sense of community and collaboration with fellow enthusiasts. Most importantly, they’ll discover the power of comics to inspire, entertain, and connect people from all walks of life.",
    goal: "Our mission is to cultivate a lifelong love for comic books while empowering students to create their own stories. We aim to celebrate the artistry, innovation, and cultural impact of this unique medium, encouraging members to see comics as both a powerful storytelling tool and a form of personal expression. Whether creating, analyzing, or simply enjoying comics, this club is a space to celebrate creativity and forge connections with fellow enthusiasts.",
    images: [],
  },
  {
    title: "Performing Arts",
    icons: [FaTheaterMasks],
    image: "/images/Class_Photos/Performing_Arts/pa-5.jpg",
    description:
      "Learn to play theater and masks with our theater and masks classes, where skill and creativity come together in an exciting blend of artistic expression and creative problem-solving.",
    overview:
      "Our Performing Arts Classes offer an exceptional opportunity for students to hone their acting skills, build self-confidence, and cultivate a lasting passion for the performing arts. Our mission is to provide students with essential acting techniques, nurturing their creative expression, stage presence, and immersion in the world of theater.",
    keypoints: [
      "Acting Fundamentals: We lay a strong foundation in acting, focusing on essential skills such as stage presence, body language, and vocal articulation",
      "Character Development: Students will advance their abilities in character analysis, learning the art of bringing fictional characters to life with depth and authenticity",
      "Script Analysis and Scene Work: Our program guides students through the process of script dissection and scene work, enhancing their ability to interpret and perform diverse dramatic material",
      "Writing Prompts and Story Organization: We introduce students to various writing prompts to inspire creativity and assist them in structuring compelling narratives. This component emphasizes outlining and organizing story elements effectively",
      "Improvisation and Spontaneity: Through improvisational exercises, students will enhance their ability to think on their feet and respond creatively in the moment",
      "Stimulating Imagination: Our classes incorporate activities designed to spark students' imaginations, encouraging the development of unique story ideas and creative concepts",
      "Collaborative Performances: Students will engage in group productions, fostering teamwork and artistic collaboration while showcasing their skills in full-scale theatrical performances",
    ],
    outcome:
      "Our commitment to a low instructor-to-student ratio ensures personalized attention and tailored guidance for each student. This approach supports their growth and development in acting, providing them with the tools needed for success in their artistic pursuits.",
    goal: "We aim to equip students with a comprehensive array of materials, scripts, and resources aligned with our curriculum. Our goal is to not only teach acting but to shape the next generation of artists, storytellers, and confident individuals. We guide students through a journey of self-discovery and creativity, transforming the stage into a gateway to a world of opportunities. Our program is dedicated to nurturing talent, fostering artistic expression, and preparing students for a future enriched by the performing arts.",
    images: [
      "/images/Class_Photos/Performing_Arts/pa-1.jpg",
      "/images/Class_Photos/Performing_Arts/pa-2.jpg",
      "/images/Class_Photos/Performing_Arts/pa-3.jpg",
      "/images/Class_Photos/Performing_Arts/pa-4.jpg",
      "/images/Class_Photos/Performing_Arts/pa-5.jpg",
      "/images/Class_Photos/Performing_Arts/pa-6.jpg",
      "/images/Class_Photos/Performing_Arts/pa-8.jpg",
      "/images/Class_Photos/Performing_Arts/pa-9.jpg",
    ],
  },
  {
    title: "Dance",
    icons: [IoMusicalNotes, PiDiscoBall, IoMusicalNoteSharp],
    image: "/images/Class_Photos/Dance/dance-3.JPG",
    description:
      "Explore the joy of movement and rhythm in our dance classes, where technique, creativity, and expression come together to create a dynamic and inspiring experience.",
    overview:
      "Our dance program is designed for all skill levels, focusing on building confidence, improving coordination, and fostering a love for dance through various styles and techniques.",
    keypoints: [
      "Explore diverse dance styles: Gain experience in ballet, jazz, contemporary, and more, learning techniques across various genres",
      "Boost confidence and creativity: Develop self-assurance while expressing your unique creativity through movement",
      "Enhance physical fitness: Improve flexibility, coordination, and overall strength through engaging dance routines",
      "Master choreography and performance: Learn to design and execute choreography, preparing for live performances",
      "Teamwork and collaboration: Participate in group dances to build communication and collaboration skills",
      "Establish strong fundamentals: Build a solid foundation in core dance techniques to support your growth",
      "Cultural dance appreciation: Discover and celebrate the significance of cultural dances from around the globe",
      "Perform live: Showcase your skills and creativity in live performances and showcases",
      "Cultivate discipline and perseverance: Strengthen your focus and determination through regular practice and dedication",
    ],
    outcome:
      "Students will gain improved physical fitness, enhanced dance techniques, and confidence in expressing themselves through movement.",
    goal: "To inspire students to find joy and passion in dance while building lifelong skills in discipline, creativity, and teamwork.",
    images: [
      "/images/Class_Photos/Dance/dance-1.JPG",
      "/images/Class_Photos/Dance/dance-3.JPG",
      "/images/Class_Photos/Dance/dance-4.JPG",
      "/images/Class_Photos/Dance/dance-5.JPG",
    ],
  },
  // {
  //   title: "Coding",
  //   icons: [FaLaptopCode, FaCode],
  //   image: "/images/codingclass.jpg",
  //   description:
  //     "Code your way to creativity and innovation with hands-on projects and interactive, game-based learning that makes programming fun and inspiring.",
  //   overview:
  //     "Our coding classes provide an exciting gateway to the world of web development, merging creativity and technology through engaging, game-based learning. Designed to captivate and inspire, our curriculum focuses on web development skills while keeping students enthusiastic and curious about programming",
  //   keypoints: [
  //     "Coding Fundamentals: Students will begin with foundational concepts in coding, using block coding to understand basic programming principles, syntax, and logic. This approach builds a strong base in algorithmic thinking",
  //     "Transition to Script Coding: As students gain confidence with block coding, we will introduce script coding. This progression allows them to apply their skills to more complex programming languages and real-world web development tasks",
  //     "Web Development Basics: Students will explore the core elements of web development, including HTML, CSS, and JavaScript. They'll learn to create and style web pages, and understand how these technologies work together to build interactive websites",
  //     "Game-Based Projects: To maintain high levels of engagement, students will work on game-based projects. These projects will involve creating interactive web games and simulations, applying coding skills to develop engaging and functional applications",
  //     "Problem-Solving and Algorithmic Thinking: Students will tackle coding challenges that enhance their problem-solving abilities and algorithmic thinking. They will learn to plan, debug, and optimize their code for efficiency and effectiveness",
  //     "Collaborative Coding: We emphasize teamwork by encouraging students to collaborate on projects. They will provide and receive feedback, fostering a supportive community and learning from their peers",
  //     "Real-World Applications: Students will have opportunities to apply their skills to real-world scenarios through project-based learning. These projects will demonstrate the practical applications of their coding knowledge and enhance their understanding of web development",
  //     "Creativity and Innovation: Our program nurtures creativity by allowing students to design and develop their own web-based games and interactive applications. This approach encourages innovative thinking and personal expression in their projects",
  //   ],
  //   outcome:
  //     "Students will gain a robust understanding of web development fundamentals and practical coding skills through engaging, game-based projects. They will develop problem-solving abilities, algorithmic thinking, and collaborative skills, preparing them for further studies and future careers in technology.",
  //   goal: "Our goal is to foster a lifelong passion for coding and web development. We aim to instill problem-solving skills, logical thinking, and creative innovation that extend beyond programming. By integrating game-based learning, we make coding enjoyable and accessible, preparing students for success in the tech industry and beyond. We envision a future where students are not only skilled coders but also enthusiastic creators, continually exploring and innovating in the world of technology.",
  //   images: [],
  // },
];
