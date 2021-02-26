import { Quotation } from "../models/activity.model";

export const activityTypes: string[] = [
  'Appearance or Signing',
  'Abtraction',
  'Camp, Trip, or Retreat',
  'Class, Training, or Workshop',
  'Concert or Performance',
  'Conference',
  'Convention',
  'Dinner or Gala',
  'Festival or Fair',
  'Game or Competition',
  'Meeting or Networking Event',
  'Other',
  'Party or Social Gathering',
  'Race or Endurance Event',
  'Rally',
  'Screening',
  'Seminar or Talk',
  'Support',
  'Tour',
  'Tournament',
  'Tradeshow, Consumer Show or Expo'
];

export const activityCategories: string[] = [
  'Business & Professional',
  'Charty & Causes',
  'Community & Culture',
  'Family & Education',
  'Fashion & Beauty',
  'Film, Media & Entertainment',
  'Food & Drink',
  'Game or Competition',
  'Other',
  'Performing & Visual Arts',
  'Science & Technology',
  'Sport & Fitness'
];

export const activityPricing: {
  price: number,
  support: number,
  active: number | number[]
}[] = [
  {
    price: 34.38,
    support: 2,
    active: [1, 5]
  },
  {
    price: 25.94,
    support: 3,
    active: [1, 5]
  },
  {
    price: 21.72,
    support: 4,
    active: [1, 5]
  },
  {
    price: 19.19,
    support: 5,
    active: [1, 5]
  },
  {
    price: 82.90,
    support: 1,
    active: 0
  },
  {
    price: 47.37,
    support: 2,
    active: 0
  },
  {
    price: 35.53,
    support: 3,
    active: 0
  },
  {
    price: 29.61,
    support: 4,
    active: 0
  },
  {
    price: 26.05,
    support: 5,
    active: 0
  },
];

export const servicePrices: Quotation[] = [
  {
    title: 'Drama and Self Expression',
    description: 'Are you a performer at heart? Join our Drama program for theatre sports, mime classes, improvisation and performance. You will have the opportunity to perform at the end of year concert and showcase your many skills. We sing, we dance, we make believe and dress up. Does Marriott have talent? Yes, indeed it does!',
    price: 4.00
  },
  {
    title: 'Circus',
    description: 'Roll up Roll up, come to our circus skills program. You will practice your circus skills and have the opportunity to perform in a non-competitive environment It is fun and fabulous. No trapeze needed, just you!',
    price: 2.00
  },
  {
    title: 'Music with Kim',
    description: 'Share your love and passion of music by connecting with our Music with Kim. You can choose 1:1 tuition or join a small group sessions. Our qualified music therapist is there to support you and at the end of each Term you will be invited to join an open mic performance to show off your skills. Cello lessons? Anything is possible',
    price: 15.00
  },
  {
    title: 'Guitar Lessons',
    description: 'Bring your guitar and join in the class, where you will learn the basics of guitar playing. Strumming, singing and performing are great for your self esteem Classes are held by a professional musician. The saying is, you are never alone if you have a guitar (If you do not have a guitar we may be able to supply one).',
    price: 2.00
  },
  {
    title: 'Karaoke',
    description: 'If you love singing, come and join our karaoke sessions. We supply the best equipment and a ready-made audience, so take the mic, take your turn and perform! It is a happy, fun and interactive session, pump up the music. This is your opportunity to be the star',
    price: 1.00
  },
  {
    title: 'Sing-a-Long',
    description: 'Sing out loud. Join our Community singing group, singing old favourite’s and tunes to enjoy. Singing out loud is good for your health, so come and take part. You can choose to sing in the group or sing a solo on microphone. The piano accompaniment is the centre of our session and we supply the songbooks',
    price: 2.00
  },
  {
    title: 'Art and Design',
    description: 'Want to express your creative flair? Join our Art program and be supported in a fully equipped Art room to create your masterpieces. Bring out your natural talent, as you choose your own designs. Take home your work for gifts or display at the end of each Term. If you wish, your creations can be exhibited promote the program in the Community Hub and local community Sewing, painting, pottery, just to name a few things we do! ',
    price: 8.00
  },
  {
    title: 'Digital Art',
    description: 'Come and explore the world through the lens of a camera. Express and capture what you see, be it a ‘snap shot’ or video.',
    price: 8.00
  },
  {
    title: 'Home and Beauty',
    description: 'Do you fancy yourself as a bit of a decorator? Want to learn all about making craft items for your home? Join us for all things beauty, have a manicure, talk about fashion and flair and general presentation. No two session are the same. You will love it and be inspired',
    price: 4.00
  },
  {
    title: 'Chair Travel',
    description: 'Travel the world from the comfort of your chair, watch an informative documentary and discuss your interests. We supply and stamp your passport for each country you visit. We visit different countries of interest and discuss traditions, culture and festivals',
    price: 2.00
  },
  {
    title: 'History / Documentary',
    description: 'Join us for the Documentary session, you will learn something and discuss with the group your opinions. You can choose to watch History, Nature and Wildlife, or Autobiographical of your favourite music and movie star icons. It is a great way to learn and enjoy in a comfortable setting ',
    price: 4.00
  },
  {
    title: 'Art History',
    description: 'Are you a History buff? Why not join our Art History sessions. You will learn all about the Major Arts of painting, sculpture and architecture, and the Minor Arts of ceramics, furniture and objects. We encourage the connection to the past from ages and cultures around the world. People who study art learn a lesson in diversity, which encourages opinions and discussions',
    price: 4.00
  },
  {
    title: 'Swimming and Hydrotherapy',
    description: 'If you love the water you will love our swimming programs, we use state of the art facilities and cater to all levels of participation. Whether you like to swim laps, use flotation equipment, enjoy the water experience or do some gentle exercises, our program is designed with you in mind. Relax in the spa after your workout to complete your session. You will feel the benefits ',
    price: 15.00
  },
  {
    title: 'Basketball',
    description: 'Do you love sport and fitness activities? Join us for a community based basketball program. You will get the opportunity to work on your basketball skills, socialise with other teams and play in an organised competition. We have three different teams for you to try out and find which one is right for you. Our teams compete in a world class sporting venue. Uniform supplied. ',
    price: 8.00
  },
  {
    title: 'Walking groups',
    description: 'Let’s get out and get moving. Walking groups at Marriott cater to all, the benefits are fresh air, exercise, time to chat and maintain your fitness. It can be a gentle stroll, a power walk or anything in-between. Bring your sneakers, your walkers or your wheelchair and join us. You will feel great afterwards',
    price: 2.00
  },
  {
    title: 'Bushwalking group',
    description: 'Why not join us in the fresh air, get out and about in our Bushwalking program. It is low impact, boosts your mood and stamina and is a cardiovascular exercise You can be driven to the location where you can get in touch with the great outdoors and feel the benefits.',
    price: 2.00
  },
  {
    title: 'Gym',
    description: 'Ever wanted to access a fully equipped gym, with a personal trainer? Come and try our sessions at our Community Hub gymnasium. You can join a group session or book your own 1:1 to be fully supported in you fitness quest. You can choose our circuit program, we have equipment to support all abilities and fitness levels, and can design a training program for your Health and Fitness. You get to relax after the workout with a meditation session ',
    price: 7.00
  },
  {
    title: 'Chair Yoga',
    description: 'Keeping fit and active is not only for the active person. Join out chair yoga sessions and practice breathing for health, stretching and yoga poses while you sit. Supportive seating is supplied in our fully equipped gymnasium. It is great way to support your wellbeing with professional tutorials, supported by staff for the session. This is followed by a relaxation meditation to complete your workout',
    price: 4.00
  },
  {
    title: 'Zumba',
    description: 'Join our Zumba sessions for a fun and fitness activity. With our Zumba qualified staff, you will be shown the moves and grooves and learn the steps to tutorials on screen. It is available either seated or standing so the enjoyment is there for all to take part Improve your coordination and join the group as you enjoy the music of Brazil.',
    price: 2.00
  },
  {
    title: 'Tennis',
    description: 'Game. Set. Match.. 50 - Love….. Love a hit of tennis? Join us in accessing great courts and facilities locally at the local tennis club, for a game, a practice or a hit to hit across the net. It’s a big hit with us. Come and join in, we supply all the equipment too. Just bring yourself and wear your sneakers',
    price: 5.00
  },
  {
    title: 'Sport',
    description: 'Great equipment for you to enjoy, and great facilities at our back door. Tennis, bocce, footy skills. Feel like a game of cricket or soccer? The park is a great opportunity to get out and enjoy. Indoor we supply a pool table, indoor bowling and balls skills ',
    price: 3.00
  },
  {
    title: 'Ten Pin Bowling',
    description: 'Do you like to go ten pin bowling? Join us for our games at the local bowling alley, you will have friendly competition and a fun time is guaranteed Bowling can be adapted for seated or standing. Bowling is great for you and you can work on improving your own score as you join the league and compete with friends',
    price: 8.00
  },
  {
    title: 'Cooking and Nutrition (including Budgeting. Shopping and Food Handling)',
    description: 'Are you a Maestro Chef in waiting? The cooking programs is cater for all. Each term you will help choose a new recipe. You will be supported to budget, shop and prepare you meals in a fully equipped kitchen. At the end of each Term you have worked towards cooking your meal with less staff input or prepare your meal at home. It builds your skills and confidence in the kitchen, so you can create at home for family and friends. Bon Appetite.',
    price: 7.00
  },
  {
    title: 'Numeracy Literacy',
    description: 'Join us to work on your numbers and word skills in a supported setting. Fun and interactive activities are there for you to enjoy so you can be involved and improve your skills, through games, puzzles and worksheets. Learning can be fun. It all adds up.',
    price: 2.00
  },
  {
    title: 'Tech Savvy',
    description: 'Join our program to support your love of using all things Tech. To be savvy is to sharpen your skills. We help you become savvy with devices to support your learning and education. Use the IPad for research, take some digital photos on you camera and visit specialty shops to print your choices and photographs. It is artistic, educational and entertaining',
    price: 4.00
  },
  {
    title: 'Laundry Skills',
    description: 'You can learn to how to do laundry by being supported to sort, wash, dry and fold the washing. Perhaps even do some ironing? This is a practical hands on program which will benefit you for the rest of your life. Be involved and learn.',
    price: 2.00
  },
  {
    title: 'I Obsession',
    description: 'Do you love using your IPad for research and entertainment purposes? Let us support you while you work with your IPad, we look at cyber safety, appropriate sites, and keep you in the loop with everything tech. Bring your own IPad or we can hook you up with one. Supportive and educational',
    price: 2.00
  },
  {
    title: 'Communication',
    description: 'Come and share your ideas in a group setting at our Community Hub. Communication takes on many levels; a social chat, a book, media or games. It is theopportunity to be social and engaged in your choices',
    price: 2.00
  },
  {
    title: 'Advocacy - Men’s / Women’s (or those who identify as) Discussion groups',
    description: 'Want to have your say? Voice your opinion? Be listened to and respected in our group discussions. Have the opportunity to learn and discuss topics of your choosing. Be informed of your rights and responsibilities. You will have the chance to discuss various topics with your peers, and be heard and valued for your input and opinion. We support all types of communication so you can be heard, and we will listen',
    price: 5.00
  },
  {
    title: 'Train travel / safety',
    description: 'Want to get out and about and learn all things travel? We offer you the opportunity to join us and be supported to do what you need to do to get around town. You can choose your outing to include an event or a fun destination. When you can travel, your choices are expanded.',
    price: 6.00
  },
  {
    title: 'Out and About',
    description: 'Do you love getting out and about? Why not join a group of people who have the same interests as you. You can enjoy a train outing, a shopping trip, an adventure outing, or just catch up for a cuppa and a chat. The possibilities are endless, staff will support you with your choices. And off you go …… ',
    price: 5.00
  },
  {
    title: 'Markets of Melbourne',
    description: 'Come and explore the various markets of Melbourne. Experience the different environment and cultures',
    price: 10.00
  },
  {
    title: 'Library',
    description: `If you love getting out and about, then why not come to the library with us. We visit all the local libraries, you can read and relax, be educated or browse the many
    items for loan. Libraries offer a great community service and it is free to use, so support your local community
    `,
    price: 2.00
  },
  {
    title: 'Gardening',
    description: `Would you like to try our gardening activity? Come and join the Community garden program where you will learn about maintaining and keeping a beautiful garden
    space. Work on your gardening skills; planting, watering and cultivating herbs and vegetables for our cooking programs. Afterwards, relax and enjoy the
    atmosphere you have helped create by enjoying a cuppa in the beautiful surrounds
    `,
    price: 3.00
  }, {
    title: 'Op shopping',
    description: `Are you a bargain hunter? Do you love to explore Op shops, looking for that special item, or books to read? Join our Community Op shopping program, you have
    the time to browse and enjoy and give back to the community with your purchases. Practice your budgeting and money skills and get out and about.
    You never know what you may find`,
    price: 5.00
  },
  {
    title: 'Reading group',
    description: `Do you like being read to and using your imagination? Immerse yourself in the stories, from books of yesteryear or todays classics. Join our reading program and
    have your choice of reading, listening to audio books, or friends who like to read out loud. It is fun and educational and can take you on an adventure
    `,
    price: 2.00
  },
  {
    title: 'Sensory',
    description: `Would you like to put some balance in your week? Relax in our purpose built sensory room for a session. After an active outing or a busy day, or just time to
    benefit your energy levels and de-stress. Music, mediation and sensory items are there for you to experience. It is another world of luxury and support with
    comfortable seating. Take me away
    `,
    price: 4.00
  },
  {
    title: 'Book Club',
    description: `If you love hearing a story or looking through books, why not join our book club? We offer the choice of being read to, listening to Read to me Stories on the IPad or
    browsing through your favourite picture books. It is a great session for you to appreciate all the joys that books and stories can give`,
    price: 2.00
  },
  {
    title: 'Woodworking',
    description: `Do you like to tinker with restoration and repairs? Would you like the hands on experience? Then why not join our woodworking group, you can be supported to
    restore furniture and items with the group and showcase your handwork throughout the centre. It is interactive and results are fantastic`,
    price: 6.00
  },
  {
    title: 'Movie Chill',
    description: `Take a break and watch a movie, in our movie club. You will supported in a comfy environment to relax and enjoy. We offer a variety, from comedies, to adventures
    or popular old time favourites. Sometimes we join in with the musicals and have a song along. Great fun and involvement`,
    price: 4.00
  },
  {
    title: 'Boredom Busters',
    description: `Don’t be bored, explore you options. Join friends and choose your activity, board games, karaoke, IPad research, walking, chatting or indoor sports, music and
    games. The sky is the limit. We have everything for you to choose, from bocce to trampolining and knitting… and everything in between. Come join the fun, being
    involved is the best`,
    price: 3.00
  },
  {
    title: 'Puzzled',
    description: `Solve the puzzle, find that piece, organise your space and off you go. This gives you the opportunity to have a chat while you work. You may complete a puzzle on
    your own or join someone else and work together. We offer a comfortable environment and puzzles galore, from 20 to 500 pieces. Choose a one and have a go`,
    price: 2.00
  },
  {
    title: 'Indoor Friendly games',
    description: `Do you like to compete with others? We offer you the WII games on the big screen, for fun and friendly competition. And Scrabble on the IPad, we can support
    your choices of games in the session designed for those who love to compete, but don’t mind if they lose.
    `,
    price: 2.00
  },
  {
    title: 'Community Based Projects',
    description: `Need some help with upskilling for work? This activity will help you to learn about the skills needed for the work place, in a group setting. You will have
    opportunities to do short courses, work towards different training certificates and try different volunteering opportunities as a part of a group who have similar
    interests.
    `,
    price: 10.00,
    active: 1
  }, {
    title: 'Art/Design',
    description: `Want to test out your artistic flair? Come try our art & design activity. You will have the opportunity to plan and develop different forms of art & design. This will
    include both individual and group projects. You will join your group to do the necessary shopping for supplies and then work together on your different projects.
    `,
    price: 6.50,
    active: 1
  },
  {
    title: 'Beauty Workshop',
    description: `Our beauty workshop activity offers you the opportunity to work on various beauty treatments. This includes painting nails, styling your hair and massage
    techniques. There will be opportunities to visit local beauty salons to receive the different treatments that you have been learning to do for yourself.`,
    price: 5.00,
    active: 1
  },
  {
    title: 'Money & Numbers',
    description: `Find money confusing? Do you find it hard to understand numbers? Our Money & Numbers activity can help you to gain a better understanding of both. You will
    participate in a mixture of number games, work sheets and practical money use. We can also help you to understand banking and what is involved with it.
    `,
    price: 5.00,
    active: 1
  },
  {
    title: 'Cooking @ MLSC (Mentone Life Saving Club)',
    description: `Each term you will choose a recipe to cook and budget for the term. Each week you will visit a local supermarket to purchase your ingredients. You will use a kitchen
    off-site to learn how to cook your chosen recipe. You will continue to cook this recipe weekly over the term with an aim of staff assistance reducing as you become
    more confident with each step of the recipe. `,
    price: 10.00,
    active: 2
  },
  {
    title: 'Out & About',
    description: `You will be involved in all aspects of planning an outing. Each fortnight your group will spend time researching any outings of interest. You will plan the journey to
    get to and from the outing, talk about the costs involved, opening times and any other information required. The following week your group will then attend the
    outing and follow up by writing a blog about your outings.
    `,
    price: 10.00,
    active: 2
  },
  {
    title: 'Basketball',
    description: `Come and participate in a community based basketball program. Learn how to travel to and from the basketball venue using public transport. You will get the
    opportunity to work on your basketball skills, socialise with other teams and play an organised game. We have three different teams for you to try out and find
    which one is right for you
    `,
    price: 8.00,
    active: 3
  },
  {
    title: 'Round the table discussions',
    description: `Have a question about what’s in the news? Unsure of your rights and responsibilities? Want the opportunity to learn and discuss topics of your choosing? Come
    and join our round the table discussions. You will have the opportunity to discuss various topics with your peers and staff to find out more information. On
    occasion we will bring in guest speakers to focus on particular areas of interest`,
    price: 3.00,
    active: 3
  },
  {
    title: 'Gardening',
    description: `Got an itchy green thumb? Come and try our gardening activity. With this activity you will have the opportunity to work on your gardening skills with a particular
    focus on planting succulents. You will learn about the horticulture involved in the activity, colour/texture contrasts and working together in a team. It does not
    stop there! Once your creations are complete, you will be given the opportunity to hone your customer service skills by speaking to members of the public about
    what you do with this activity.
    `,
    price: 10.00,
    active: 3
  },
  {
    title: 'Cooking @ TAFE',
    description: `Each term you will choose a recipe to cook and budget for the term. Each week you will visit a local supermarket to purchase your ingredients. You will use a
    kitchen off-site to learn how to cook your chosen recipe. You will continue to cook this recipe weekly over the term with an aim of staff assistance reducing as you
    become more confident with each step of the recipe.
    `,
    price: 10.00,
    active: 4
  },
  {
    title: 'Cooking @ MLSC',
    description: `Each term you will choose a recipe to cook and budget for the term. Each week you will visit a local supermarket to purchase your ingredients. You will use a
    kitchen off-site to learn how to cook your chosen recipe. You will continue to cook this recipe weekly over the term with an aim of staff assistance reducing as you
    become more confident with each step of the recipe. `,
    price: 10.00,
    active: 4
  },
  {
    title: 'Cooking @ Hampton Bowls Club',
    description: `Each term you will choose a recipe to cook and budget for the term. Each week you will visit a local supermarket to purchase your ingredients. You will use a
    kitchen off-site to learn how to cook your chosen recipe. You will continue to cook this recipe weekly over the term with an aim of staff assistance reducing as you
    become more confident with each step of the recipe. `,
    price: 10.00,
    active: 4
  },
  {
    title: 'Gym',
    description: `Ever wanted to access a gym each week with qualified personal trainers? Come and try our gym program. You will learn how to travel to and from the gym using
    public transport. At the gym you can choose to join in on a circuit program or weights session. Each of these is overseen by a qualified personal trainer and extra
    support from our staff so that you get the most out of your time at the gym.
    `,
    price: 11.00,
    active: 5
  },
  {
    title: 'Swimming',
    description: `With our swimming group you will learn how to travel to and from the venue using public transport. We have booked a swimming lane at the pool so your group
    can participate in different exercises and swim some laps without the hassle of running into other swimmers. After your exercise session is complete there will be
    time to use others areas of the aquatic centre.`,
    price: 11.00,
    active: 5
  },
  {
    title: 'Mindfulness',
    description: `At the end of your week it can be good to have the opportunity to have some downtime and reflect on what you have done. Our mindfulness sessions in the
    afternoon is your chance to work on a project of your choosing. We have opportunities for group sessions including meditation, join others for a board/card game
    or take the opportunity to chill out.
    `,
    price: 4.00,
    active: 5
  }
];
