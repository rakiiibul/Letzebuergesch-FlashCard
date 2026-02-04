// ----------------------------
// Flashcard App Script
// ----------------------------

// Read selected category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// ----------------------------
// Flashcard data
// ----------------------------
const flashcardSets = {
    math: [
        {
            question: "2 + 2",
            answer: "4",
            hint: "It's an even number",
            details: "Adding two twos gives four. Basic addition.",
            audio: "audio/math_2plus2.mp3"
        },
        {
            question: "5 × 3",
            answer: "15",
            hint: "Think multiplication table of 5",
            details: "5 multiplied by 3 equals 15."
        }
    ],
    english: [
        {
            question: "Opposite of hot?",
            answer: "Cold",
            hint: "It's the opposite temperature",
            details: "Hot and cold are antonyms.",
            audio: "audio/english_hot_cold.mp3"
        },
        {
            question: "Plural of child?",
            answer: "Children",
            hint: "Think irregular plural",
            details: "Child becomes children in plural."
        }
    ],
        
    luxembourgish: [
  {
    "question": "Wéi geet et Iech?",
    "answer": "Et geet mir gutt, merci.",
    "hint": "How are you? (formal)",
    "details": "I'm well, thank you.",
    "audio_Q": "audio/lb_how_are_you_formal.mp3",
    "audio_A": "audio/lb_im_well_thank_you_formal.mp3"
  },
  {
    "question": "Wéi heescht Dir?",
    "answer": "Ech heeschen …",
    "hint": "What is your name? (formal)",
    "details": "My name is …",
    "audio_Q": "audio/lb_whats_your_name_formal.mp3",
    "audio_A": "audio/lb_my_name_is_formal.mp3"
  },
  {
    "question": "Vu wou kënnt Dir?",
    "answer": "Ech kommen aus …",
    "hint": "Where are you from? (formal)",
    "details": "I come from …",
    "audio_Q": "audio/lb_where_are_you_from_formal.mp3",
    "audio_A": "audio/lb_i_come_from_formal.mp3"
  },
  {
    "question": "Wéini ass Äre Gebuertsdag?",
    "answer": "Mäin Gebuertsdag ass den …",
    "hint": "When is your birthday? (formal)",
    "details": "My birthday is on …",
    "audio_Q": "audio/lb_when_is_your_birthday_formal.mp3",
    "audio_A": "audio/lb_my_birthday_is_formal.mp3"
  },
  {
    "question": "Wou wunnen Dir?",
    "answer": "Ech wunnen zu …",
    "hint": "Where do you live? (formal)",
    "details": "I live in …",
    "audio_Q": "audio/lb_where_do_you_live_formal.mp3",
    "audio_A": "audio/lb_i_live_in_formal.mp3"
  },
  {
    "question": "Sidd Dir frou?",
    "answer": "Jo, ech sinn frou, merci.",
    "hint": "Are you happy? (formal)",
    "details": "Yes, I am happy, thank you.",
    "audio_Q": "audio/lb_are_you_happy_formal.mp3",
    "audio_A": "audio/lb_yes_im_happy_formal.mp3"
  },
  {
    "question": "Sidd Dir midd?",
    "answer": "Jo, ech sinn e bëssen midd.",
    "hint": "Are you tired? (formal)",
    "details": "Yes, I am a little tired.",
    "audio_Q": "audio/lb_are_you_tired_formal.mp3",
    "audio_A": "audio/lb_yes_im_a_bit_tired_formal.mp3"
  },
  {
    "question": "Wat hutt Dir gemaach?",
    "answer": "Ech hunn gelies.",
    "hint": "What did you do? (formal)",
    "details": "I read.",
    "audio_Q": "audio/lb_what_did_you_do_formal.mp3",
    "audio_A": "audio/lb_i_read_formal.mp3"
  },
  {
    "question": "Wat wëllt Dir iessen?",
    "answer": "Ech géif gär e Sandwich iessen.",
    "hint": "What would you like to eat? (formal)",
    "details": "I would like to eat a sandwich.",
    "audio_Q": "audio/lb_what_do_you_want_to_eat_formal.mp3",
    "audio_A": "audio/lb_i_would_like_a_sandwich_formal.mp3"
  },
  {
    "question": "Wat drénkt Dir?",
    "answer": "Ech drénken Waasser, merci.",
    "hint": "What are you drinking? (formal)",
    "details": "I am drinking water, thank you.",
    "audio_Q": "audio/lb_what_are_you_drinking_formal.mp3",
    "audio_A": "audio/lb_im_drinking_water_formal.mp3"
  },
  {
    "question": "Wéi al sidd Dir?",
    "answer": "Ech sinn … Joer al.",
    "hint": "How old are you? (formal)",
    "details": "I am … years old.",
    "audio_Q": "audio/lb_how_old_are_you_formal.mp3",
    "audio_A": "audio/lb_i_am_years_old_formal.mp3"
  },
  {
    "question": "Wéi laang bleift Dir hei?",
    "answer": "Ech bleiwen fir … Deeg.",
    "hint": "How long are you staying here? (formal)",
    "details": "I am staying for … days.",
    "audio_Q": "audio/lb_how_long_are_you_staying_formal.mp3",
    "audio_A": "audio/lb_im_staying_for_days_formal.mp3"
  },
  {
    "question": "Kënnt Dir mir hëllefen?",
    "answer": "Jo, natierlech!",
    "hint": "Can you help me? (formal)",
    "details": "Yes, of course!",
    "audio_Q": "audio/lb_can_you_help_me_formal.mp3",
    "audio_A": "audio/lb_yes_of_course_formal.mp3"
  },
  {
    "question": "Wou ass d'Toilette?",
    "answer": "D'Toilette ass do.",
    "hint": "Where is the bathroom? (formal)",
    "details": "The bathroom is over there.",
    "audio_Q": "audio/lb_where_is_bathroom_formal.mp3",
    "audio_A": "audio/lb_bathroom_is_there_formal.mp3"
  },
  {
    "question": "Wat kascht dat?",
    "answer": "Et kascht … Euro.",
    "hint": "How much does it cost? (formal)",
    "details": "It costs … euros.",
    "audio_Q": "audio/lb_how_much_does_it_cost_formal.mp3",
    "audio_A": "audio/lb_it_costs_euros_formal.mp3"
  },
  {
    "question": "Wéi spéit ass et?",
    "answer": "Et ass … Auer.",
    "hint": "What time is it? (formal)",
    "details": "It is … o'clock.",
    "audio_Q": "audio/lb_what_time_is_it_formal.mp3",
    "audio_A": "audio/lb_its_oclock_formal.mp3"
  },
  {
    "question": "Hutt Dir Zäit?",
    "answer": "Jo, ech hunn Zäit.",
    "hint": "Do you have time? (formal)",
    "details": "Yes, I have time.",
    "audio_Q": "audio/lb_do_you_have_time_formal.mp3",
    "audio_A": "audio/lb_yes_i_have_time_formal.mp3"
  },
  {
    "question": "Wéi ass d'Wieder?",
    "answer": "Et ass schéin, merci.",
    "hint": "How is the weather? (formal)",
    "details": "It's nice, thank you.",
    "audio_Q": "audio/lb_how_is_weather_formal.mp3",
    "audio_A": "audio/lb_its_nice_formal.mp3"
  },
  {
    "question": "Wat ass dëst?",
    "answer": "Dat ass e Buch.",
    "hint": "What is this? (formal)",
    "details": "That is a book.",
    "audio_Q": "audio/lb_what_is_this_formal.mp3",
    "audio_A": "audio/lb_that_is_a_book_formal.mp3"
  },
  {
    "question": "Wéi vill sinn et?",
    "answer": "Et sinn …",
    "hint": "How many are there? (formal)",
    "details": "There are …",
    "audio_Q": "audio/lb_how_many_formal.mp3",
    "audio_A": "audio/lb_there_are_formal.mp3"
  },
  {
    "question": "Wou geet Dir hi?",
    "answer": "Ech ginn op d'Aarbecht.",
    "hint": "Where are you going? (formal)",
    "details": "I am going to work.",
    "audio_Q": "audio/lb_where_are_you_going_formal.mp3",
    "audio_A": "audio/lb_im_going_to_work_formal.mp3"
  },
  {
    "question": "Hutt Dir Mëttegiessen geholl?",
    "answer": "Jo, ech hat Mëttegiessen.",
    "hint": "Did you have lunch? (formal)",
    "details": "Yes, I had lunch.",
    "audio_Q": "audio/lb_did_you_have_lunch_formal.mp3",
    "audio_A": "audio/lb_yes_i_had_lunch_formal.mp3"
  },
  {
    "question": "Wat léiert Dir?",
    "answer": "Ech léieren Lëtzebuergesch.",
    "hint": "What are you learning? (formal)",
    "details": "I am learning Luxembourgish.",
    "audio_Q": "audio/lb_what_are_you_learning_formal.mp3",
    "audio_A": "audio/lb_im_learning_luxembourgish_formal.mp3"
  },
  {
    "question": "Wéi eng Sprooch schwätzt Dir?",
    "answer": "Ech schwätzen Lëtzebuergesch.",
    "hint": "Which language do you speak? (formal)",
    "details": "I speak Luxembourgish.",
    "audio_Q": "audio/lb_what_language_do_you_speak_formal.mp3",
    "audio_A": "audio/lb_i_speak_luxembourgish_formal.mp3"
  },
  {
    "question": "Wéi ass Äre Telefonsnummer?",
    "answer": "Mäi Telefonsnummer ass …",
    "hint": "What is your phone number? (formal)",
    "details": "My phone number is …",
    "audio_Q": "audio/lb_whats_your_phone_number_formal.mp3",
    "audio_A": "audio/lb_my_phone_number_is_formal.mp3"
  },
  {
    "question": "Wat maachen mir haut?",
    "answer": "Mir ginn spadséieren.",
    "hint": "What are we doing today? (formal)",
    "details": "We are going for a walk.",
    "audio_Q": "audio/lb_what_are_we_doing_today_formal.mp3",
    "audio_A": "audio/lb_we_are_going_for_a_walk_formal.mp3"
  },
  {
    "question": "Sidd Dir prett?",
    "answer": "Jo, ech sinn prett.",
    "hint": "Are you ready? (formal)",
    "details": "Yes, I am ready.",
    "audio_Q": "audio/lb_are_you_ready_formal.mp3",
    "audio_A": "audio/lb_yes_im_ready_formal.mp3"
  },
  {
    "question": "Wou ass de Bus?",
    "answer": "De Bus kënnt geschwënn.",
    "hint": "Where is the bus? (formal)",
    "details": "The bus is coming soon.",
    "audio_Q": "audio/lb_where_is_the_bus_formal.mp3",
    "audio_A": "audio/lb_bus_coming_soon_formal.mp3"
  },
  {
    "question": "Wat ass Äre Hobby?",
    "answer": "Mäin Hobby ass Musek ze héieren.",
    "hint": "What is your hobby? (formal)",
    "details": "My hobby is listening to music.",
    "audio_Q": "audio/lb_whats_your_hobby_formal.mp3",
    "audio_A": "audio/lb_my_hobby_is_listening_to_music_formal.mp3"
  },
  {
    "question": "Hutt Dir Hausdéieren?",
    "answer": "Jo, ech hunn e Päerd.",
    "hint": "Do you have pets? (formal)",
    "details": "Yes, I have a horse.",
    "audio_Q": "audio/lb_do_you_have_pets_formal.mp3",
    "audio_A": "audio/lb_yes_i_have_a_horse_formal.mp3"
  },
  {
    "question": "Wéi geet et de Kanner?",
    "answer": "Et geet hinnen gutt.",
    "hint": "How are the children? (formal)",
    "details": "They are well.",
    "audio_Q": "audio/lb_how_are_the_children_formal.mp3",
    "audio_A": "audio/lb_they_are_well_formal.mp3"
  },
  {
    "question": "Wat maachen ech falsch?",
    "answer": "Niddeles, alles ass gutt!",
    "hint": "What am I doing wrong? (formal)",
    "details": "Nothing, everything is fine!",
    "audio_Q": "audio/lb_what_am_i_doing_wrong_formal.mp3",
    "audio_A": "audio/lb_nothing_everything_is_fine_formal.mp3"
  },
  {
    "question": "Wéi laang bleift Dir hei?",
    "answer": "Ech bleiwen eng Stonn.",
    "hint": "How long are you staying here? (formal)",
    "details": "I am staying one hour.",
    "audio_Q": "audio/lb_how_long_are_you_staying_here_formal.mp3",
    "audio_A": "audio/lb_im_staying_one_hour_formal.mp3"
  },
  {
    "question": "Wat ass Äre Liewensmëttel?",
    "answer": "Ech géif gär iessen.",
    "hint": "What food do you like? (formal)",
    "details": "I would like to eat.",
    "audio_Q": "audio/lb_what_food_do_you_like_formal.mp3",
    "audio_A": "audio/lb_i_would_like_to_eat_formal.mp3"
  },
  {
    "question": "Wéi fillt Dir Iech?",
    "answer": "Ech fillen mech gutt, merci.",
    "hint": "How do you feel? (formal)",
    "details": "I feel well, thank you.",
    "audio_Q": "audio/lb_how_do_you_feel_formal.mp3",
    "audio_A": "audio/lb_i_feel_well_formal.mp3"
  },
  {
    "question": "Wat ass d'Zëmmernummer?",
    "answer": "Et ass Zëmmer 12.",
    "hint": "What is the room number? (formal)",
    "details": "It is room 12.",
    "audio_Q": "audio/lb_what_is_room_number_formal.mp3",
    "audio_A": "audio/lb_it_is_room_12_formal.mp3"
  },
  {
    "question": "Wéi kann ech hëllefen?",
    "answer": "Dir kënnt d'Dier opmaachen.",
    "hint": "How can I help? (formal)",
    "details": "You can open the door.",
    "audio_Q": "audio/lb_how_can_i_help_formal.mp3",
    "audio_A": "audio/lb_you_can_open_the_door_formal.mp3"
  },
  {
    "question": "Wat ass Är Lieblingsfaarf?",
    "answer": "Meng Lieblingsfaarf ass blo.",
    "hint": "What is your favorite color? (formal)",
    "details": "My favorite color is blue.",
    "audio_Q": "audio/lb_whats_your_favorite_color_formal.mp3",
    "audio_A": "audio/lb_my_favorite_color_is_blue_formal.mp3"
  },
  {
    "question": "Wat wëllt Dir kucken?",
    "answer": "Ech géif gär e Film kucken.",
    "hint": "What would you like to watch? (formal)",
    "details": "I would like to watch a movie.",
    "audio_Q": "audio/lb_what_do_you_want_to_watch_formal.mp3",
    "audio_A": "audio/lb_i_would_like_to_watch_a_movie_formal.mp3"
  },
  {
    "question": "Sidd Dir prett ze goen?",
    "answer": "Jo, lass goen!",
    "hint": "Are you ready to go? (formal)",
    "details": "Yes, let's go!",
    "audio_Q": "audio/lb_are_you_ready_to_go_formal.mp3",
    "audio_A": "audio/lb_yes_lets_go_formal.mp3"
  },
  {
    "question": "Wéi geet et mat der Aarbecht?",
    "answer": "Et geet gutt, merci.",
    "hint": "How is work going? (formal)",
    "details": "It's going well, thank you.",
    "audio_Q": "audio/lb_how_is_work_going_formal.mp3",
    "audio_A": "audio/lb_its_going_well_formal.mp3"
  },
  {
    "question": "Wéi laang bleift de Bus?",
    "answer": "De Bus bleift fënnef Minutten.",
    "hint": "How long is the bus staying? (formal)",
    "details": "The bus will stay for five minutes.",
    "audio_Q": "audio/lb_how_long_is_bus_staying_formal.mp3",
    "audio_A": "audio/lb_bus_stays_five_minutes_formal.mp3"
  },
  {
    "question": "Wéi vill kascht et?",
    "answer": "Et kascht zwanzeg Euro.",
    "hint": "How much does it cost? (formal)",
    "details": "It costs twenty euros.",
    "audio_Q": "audio/lb_how_much_does_it_cost2_formal.mp3",
    "audio_A": "audio/lb_it_costs_twenty_euros_formal.mp3"
  },
  {
    "question": "Wéi ass Är Telefonsnummer?",
    "answer": "Mäi Telefon ass …",
    "hint": "What is your phone number? (formal)",
    "details": "My phone number is …",
    "audio_Q": "audio/lb_whats_the_phone_number2_formal.mp3",
    "audio_A": "audio/lb_my_phone_number_is_formal.mp3"
  },
  {
    "question": "Kënnt Dir dat widderhuelen?",
    "answer": "Jo, natierlech.",
    "hint": "Can you repeat that? (formal)",
    "details": "Yes, of course.",
    "audio_Q": "audio/lb_can_you_repeat_that_formal.mp3",
    "audio_A": "audio/lb_yes_of_course2_formal.mp3"
  },
  {
    "question": "Wat maachen mir dëse Weekend?",
    "answer": "Mir plangen e Picknick.",
    "hint": "What are we doing this weekend? (formal)",
    "details": "We are planning a picnic.",
    "audio_Q": "audio/lb_what_are_we_doing_this_weekend_formal.mp3",
    "audio_A": "audio/lb_we_are_planning_a_picnic_formal.mp3"
  }
]



//     luxembourgish: [
//   {
//     "question": "Wéi geet et dir?",
//     "answer": "Et geet mir gutt, merci!",
//     "hint": "How are you?",
//     "details": "I'm good, thank you!",
//     "audio_Q": "audio/lb_how_are_you.mp3",
//     "audio_A": "audio/lb_im_good_thank_you.mp3"
//   },
//   {
//     "question": "Wéi heescht du?",
//     "answer": "Ech heeschen …",
//     "hint": "What's your name?",
//     "details": "My name is …",
//     "audio_Q": "audio/lb_whats_your_name.mp3",
//     "audio_A": "audio/lb_my_name_is.mp3"
//   },
//   {
//     "question": "Vu wou bass du?",
//     "answer": "Ech sinn aus …..",
//     "hint": "Where are you from?",
//     "details": "I am from …",
//     "audio_Q": "audio/lb_where_are_you_from.mp3",
//     "audio_A": "audio/lb_i_am_from.mp3"
//   },
//   {
//     "question": "Wéini ass däin Gebuertsdag?",
//     "answer": "Mäin Gebuertsdag ass den …",
//     "hint": "When is your birthday?",
//     "details": "My birthday is …",
//     "audio_Q": "audio/lb_when_is_your_birthday.mp3",
//     "audio_A": "audio/lb_my_birthday_is.mp3"
//   },
//   {
//     "question": "Wou wunnt dir?",
//     "answer": "Ech wunn zu …",
//     "hint": "Where do you live?",
//     "details": "I live in …",
//     "audio_Q": "audio/lb_where_do_you_live.mp3",
//     "audio_A": "audio/lb_i_live_in.mp3"
//   },
//   {
//     "question": "Sidd dir frou?",
//     "answer": "Jo, ech sinn frou.",
//     "hint": "Are you happy?",
//     "details": "Yes, I am happy.",
//     "audio_Q": "audio/lb_are_you_happy.mp3",
//     "audio_A": "audio/lb_yes_im_happy.mp3"
//   },
//   {
//     "question": "Bass du midd?",
//     "answer": "Jo, ech sinn midd.",
//     "hint": "Are you tired?",
//     "details": "Yes, I'm tired.",
//     "audio_Q": "audio/lb_are_you_tired.mp3",
//     "audio_A": "audio/lb_yes_im_tired.mp3"
//   },
//   {
//     "question": "Wat häs du gemaach?",
//     "answer": "Ech hu gelies.",
//     "hint": "What did you do?",
//     "details": "I read.",
//     "audio_Q": "audio/lb_what_did_you_do.mp3",
//     "audio_A": "audio/lb_i_read.mp3"
//   },
//   {
//     "question": "Wat wëlls du iessen?",
//     "answer": "Ech wëll e Sandwich.",
//     "hint": "What do you want to eat?",
//     "details": "I want a sandwich.",
//     "audio_Q": "audio/lb_what_do_you_want_to_eat.mp3",
//     "audio_A": "audio/lb_i_want_a_sandwich.mp3"
//   },
//   {
//     "question": "Wat drénks du?",
//     "answer": "Ech drénken Waasser.",
//     "hint": "What are you drinking?",
//     "details": "I'm drinking water.",
//     "audio_Q": "audio/lb_what_are_you_drinking.mp3",
//     "audio_A": "audio/lb_im_drinking_water.mp3"
//   },
//   {
//     "question": "Wéi al bass du?",
//     "answer": "Ech sinn … Joer al.",
//     "hint": "How old are you?",
//     "details": "I am … years old.",
//     "audio_Q": "audio/lb_how_old_are_you.mp3",
//     "audio_A": "audio/lb_i_am_years_old.mp3"
//   },
//   {
//     "question": "Wéi laang stays du hei?",
//     "answer": "Ech bleiwen fir … Deeg.",
//     "hint": "How long are you staying here?",
//     "details": "I'm staying for … days.",
//     "audio_Q": "audio/lb_how_long_are_you_staying.mp3",
//     "audio_A": "audio/lb_im_staying_for_days.mp3"
//   },
//   {
//     "question": "Kënns du mir hëllefen?",
//     "answer": "Jo, natierlech!",
//     "hint": "Can you help me?",
//     "details": "Yes, of course!",
//     "audio_Q": "audio/lb_can_you_help_me.mp3",
//     "audio_A": "audio/lb_yes_of_course.mp3"
//   },
//   {
//     "question": "Wou ass d'Toilette?",
//     "answer": "D'Toilette ass do.",
//     "hint": "Where is the bathroom?",
//     "details": "The bathroom is over there.",
//     "audio_Q": "audio/lb_where_is_bathroom.mp3",
//     "audio_A": "audio/lb_bathroom_is_there.mp3"
//   },
//   {
//     "question": "Wat kascht dat?",
//     "answer": "Et kascht … Euro.",
//     "hint": "How much does it cost?",
//     "details": "It costs … euros.",
//     "audio_Q": "audio/lb_how_much_does_it_cost.mp3",
//     "audio_A": "audio/lb_it_costs_euros.mp3"
//   },
//   {
//     "question": "Wéi spéit ass et?",
//     "answer": "Et ass … Auer.",
//     "hint": "What time is it?",
//     "details": "It's … o'clock.",
//     "audio_Q": "audio/lb_what_time_is_it.mp3",
//     "audio_A": "audio/lb_its_oclock.mp3"
//   },
//   {
//     "question": "Hues du Zäit?",
//     "answer": "Jo, ech hunn Zäit.",
//     "hint": "Do you have time?",
//     "details": "Yes, I have time.",
//     "audio_Q": "audio/lb_do_you_have_time.mp3",
//     "audio_A": "audio/lb_yes_i_have_time.mp3"
//   },
//   {
//     "question": "Bass du midd?",
//     "answer": "Nee, ech sinn net midd.",
//     "hint": "Are you tired?",
//     "details": "No, I'm not tired.",
//     "audio_Q": "audio/lb_are_you_tired2.mp3",
//     "audio_A": "audio/lb_no_im_not_tired.mp3"
//   },
//   {
//     "question": "Wéi ass d'Wieder?",
//     "answer": "Et ass schéin.",
//     "hint": "How is the weather?",
//     "details": "It's nice.",
//     "audio_Q": "audio/lb_how_is_weather.mp3",
//     "audio_A": "audio/lb_its_nice.mp3"
//   },
//   {
//     "question": "Wat ass dëst?",
//     "answer": "Dat ass e Buch.",
//     "hint": "What is this?",
//     "details": "That is a book.",
//     "audio_Q": "audio/lb_what_is_this.mp3",
//     "audio_A": "audio/lb_that_is_a_book.mp3"
//   },
//   {
//     "question": "Wéi vill Sinn?",
//     "answer": "Et sinn …",
//     "hint": "How many are there?",
//     "details": "There are …",
//     "audio_Q": "audio/lb_how_many.mp3",
//     "audio_A": "audio/lb_there_are.mp3"
//   },
//   {
//     "question": "Wou geet's hi?",
//     "answer": "Ech ginn op d'Aarbecht.",
//     "hint": "Where are you going?",
//     "details": "I'm going to work.",
//     "audio_Q": "audio/lb_where_are_you_going.mp3",
//     "audio_A": "audio/lb_im_going_to_work.mp3"
//   },
//   {
//     "question": "Hues du e mëttag Iessen?",
//     "answer": "Jo, ech hunn Iessen.",
//     "hint": "Do you have lunch?",
//     "details": "Yes, I have lunch.",
//     "audio_Q": "audio/lb_do_you_have_lunch.mp3",
//     "audio_A": "audio/lb_yes_i_have_lunch.mp3"
//   },
//   {
//     "question": "Wat léiers du?",
//     "answer": "Ech léieren Lëtzebuergesch.",
//     "hint": "What are you learning?",
//     "details": "I'm learning Luxembourgish.",
//     "audio_Q": "audio/lb_what_are_you_learning.mp3",
//     "audio_A": "audio/lb_im_learning_luxembourgish.mp3"
//   },
//   {
//     "question": "Wéi eng Sprooch schwätz du?",
//     "answer": "Ech schwätzen Lëtzebuergesch.",
//     "hint": "What language do you speak?",
//     "details": "I speak Luxembourgish.",
//     "audio_Q": "audio/lb_what_language_do_you_speak.mp3",
//     "audio_A": "audio/lb_i_speak_luxembourgish.mp3"
//   },
//   {
//     "question": "Wéi ass däi Telefonsnummer?",
//     "answer": "Mäi Nummer ass …",
//     "hint": "What's your phone number?",
//     "details": "My number is …",
//     "audio_Q": "audio/lb_whats_your_phone_number.mp3",
//     "audio_A": "audio/lb_my_number_is.mp3"
//   },
//   {
//     "question": "Wat maachen mir haut?",
//     "answer": "Mir goen spadséieren.",
//     "hint": "What are we doing today?",
//     "details": "We are going for a walk.",
//     "audio_Q": "audio/lb_what_are_we_doing_today.mp3",
//     "audio_A": "audio/lb_we_are_going_for_a_walk.mp3"
//   },
//   {
//     "question": "Sidd dir prett?",
//     "answer": "Jo, ech sinn prett.",
//     "hint": "Are you ready?",
//     "details": "Yes, I'm ready.",
//     "audio_Q": "audio/lb_are_you_ready.mp3",
//     "audio_A": "audio/lb_yes_im_ready.mp3"
//   },
//   {
//     "question": "Wou ass de Bus?",
//     "answer": "De Bus kënnt geschwënn.",
//     "hint": "Where is the bus?",
//     "details": "The bus is coming soon.",
//     "audio_Q": "audio/lb_where_is_the_bus.mp3",
//     "audio_A": "audio/lb_bus_coming_soon.mp3"
//   },
//   {
//     "question": "Wat ass däin Hobby?",
//     "answer": "Mäin Hobby ass Musek ze héieren.",
//     "hint": "What's your hobby?",
//     "details": "My hobby is listening to music.",
//     "audio_Q": "audio/lb_whats_your_hobby.mp3",
//     "audio_A": "audio/lb_my_hobby_is_listening_to_music.mp3"
//   },
//   {
//     "question": "Hues du Hausdéieren?",
//     "answer": "Jo, ech hunn e Päerd.",
//     "hint": "Do you have pets?",
//     "details": "Yes, I have a horse.",
//     "audio_Q": "audio/lb_do_you_have_pets.mp3",
//     "audio_A": "audio/lb_yes_i_have_a_horse.mp3"
//   },
//   {
//     "question": "Wéi geet et de Kanner?",
//     "answer": "Et geet hinnen gutt.",
//     "hint": "How are the kids?",
//     "details": "They are good.",
//     "audio_Q": "audio/lb_how_are_the_kids.mp3",
//     "audio_A": "audio/lb_they_are_good.mp3"
//   },
//   {
//     "question": "Wat maachen ech falsch?",
//     "answer": "Niddeles, alles ass gutt!",
//     "hint": "What am I doing wrong?",
//     "details": "Nothing, everything is good!",
//     "audio_Q": "audio/lb_what_am_i_doing_wrong.mp3",
//     "audio_A": "audio/lb_nothing_everything_is_good.mp3"
//   },
//   {
//     "question": "Wéi laang bleiwe mir?",
//     "answer": "Mir bleiwen eng Stonn.",
//     "hint": "How long are we staying?",
//     "details": "We are staying one hour.",
//     "audio_Q": "audio/lb_how_long_are_we_staying.mp3",
//     "audio_A": "audio/lb_we_are_staying_one_hour.mp3"
//   },
//   {
//     "question": "Wat ass däin Liewensmëttel?",
//     "answer": "Ech hätt gär Iessen.",
//     "hint": "What's your food?",
//     "details": "I would like food.",
//     "audio_Q": "audio/lb_whats_your_food.mp3",
//     "audio_A": "audio/lb_i_would_like_food.mp3"
//   },
//   {
//     "question": "Wéi fills du dech?",
//     "answer": "Ech fillen mech gutt.",
//     "hint": "How do you feel?",
//     "details": "I feel good.",
//     "audio_Q": "audio/lb_how_do_you_feel.mp3",
//     "audio_A": "audio/lb_i_feel_good.mp3"
//   },
//   {
//     "question": "Wat ass d'Nummer vum Zëmmer?",
//     "answer": "Et ass Zëmmer 12.",
//     "hint": "What's the room number?",
//     "details": "It's room 12.",
//     "audio_Q": "audio/lb_whats_the_room_number.mp3",
//     "audio_A": "audio/lb_its_room_12.mp3"
//   },
//   {
//     "question": "Wéi kann ech hëllefen?",
//     "answer": "Dir kënnt d'Dier opmaachen.",
//     "hint": "How can I help?",
//     "details": "You can open the door.",
//     "audio_Q": "audio/lb_how_can_i_help.mp3",
//     "audio_A": "audio/lb_you_can_open_the_door.mp3"
//   },
//   {
//     "question": "Wéi ass däi Lieblingsfaarf?",
//     "answer": "Meng Lieblingsfaarf ass blo.",
//     "hint": "What's your favorite color?",
//     "details": "My favorite color is blue.",
//     "audio_Q": "audio/lb_whats_your_favorite_color.mp3",
//     "audio_A": "audio/lb_my_favorite_color_is_blue.mp3"
//   },
//   {
//     "question": "Wat wëlls du kucken?",
//     "answer": "Ech wëll e Film kucken.",
//     "hint": "What do you want to watch?",
//     "details": "I want to watch a movie.",
//     "audio_Q": "audio/lb_what_do_you_want_to_watch.mp3",
//     "audio_A": "audio/lb_i_want_to_watch_a_movie.mp3"
//   },
//   {
//     "question": "Sidd dir prett ze goen?",
//     "answer": "Jo, lass goen!",
//     "hint": "Are you ready to go?",
//     "details": "Yes, let's go!",
//     "audio_Q": "audio/lb_are_you_ready_to_go.mp3",
//     "audio_A": "audio/lb_yes_lets_go.mp3"
//   },
//   {
//     "question": "Wéi geet et mat der Aarbecht?",
//     "answer": "Et geet gutt.",
//     "hint": "How's work going?",
//     "details": "It's going well.",
//     "audio_Q": "audio/lb_hows_work_going.mp3",
//     "audio_A": "audio/lb_its_going_well.mp3"
//   },
//   {
//     "question": "Wéi laang bleift de Bus?",
//     "answer": "De Bus bleift fënnef Minutten.",
//     "hint": "How long is the bus staying?",
//     "details": "The bus stays five minutes.",
//     "audio_Q": "audio/lb_how_long_is_bus_staying.mp3",
//     "audio_A": "audio/lb_bus_stays_five_minutes.mp3"
//   },
//   {
//     "question": "Wéi vill kascht et?",
//     "answer": "Et kascht zwanzeg Euro.",
//     "hint": "How much does it cost?",
//     "details": "It costs twenty euros.",
//     "audio_Q": "audio/lb_how_much_does_it_cost2.mp3",
//     "audio_A": "audio/lb_it_costs_twenty_euros.mp3"
//   },
//   {
//     "question": "Wéi ass d'Nummer vum Telefon?",
//     "answer": "Mäi Telefon ass …",
//     "hint": "What's the phone number?",
//     "details": "My phone number is …",
//     "audio_Q": "audio/lb_whats_the_phone_number2.mp3",
//     "audio_A": "audio/lb_my_phone_number_is.mp3"
//   },
//   {
//     "question": "Kannst du dat widderhuelen?",
//     "answer": "Jo, natierlech.",
//     "hint": "Can you repeat that?",
//     "details": "Yes, of course.",
//     "audio_Q": "audio/lb_can_you_repeat_that.mp3",
//     "audio_A": "audio/lb_yes_of_course2.mp3"
//   },
//   {
//     "question": "Wat maachen mir dëse Weekend?",
//     "answer": "Mir plangen e Picknick.",
//     "hint": "What are we doing this weekend?",
//     "details": "We are planning a picnic.",
//     "audio_Q": "audio/lb_what_are_we_doing_this_weekend.mp3",
//     "audio_A": "audio/lb_we_are_planning_a_picnic.mp3"
//   }
// ]

};

// ----------------------------
// App State
// ----------------------------
const flashcards = flashcardSets[category] || [];
let currentIndex = 0;
let isFlipped = false;

// ----------------------------
// DOM Elements
// ----------------------------
const card = document.getElementById("card");
const frontText = document.getElementById("frontText");
const backText = document.getElementById("backText");
const hintText = document.getElementById("hintText");
const detailsText = document.getElementById("detailsText");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const speakBtn = document.getElementById("speakBtn");

const hintBtn = document.getElementById("hintBtn");
const detailsBtn = document.getElementById("detailsBtn");

// ----------------------------
// Show Card
// ----------------------------
function showCard() {
    if (flashcards.length === 0) return;

    const cardData = flashcards[currentIndex];

    frontText.textContent = cardData.question;
    backText.textContent = cardData.answer;

    // Hide hint/details initially
    hintText.textContent = "";
    detailsText.textContent = "";

    // Reset button labels
    hintBtn.textContent = "Show Hint";
    detailsBtn.textContent = "Show Details";

    card.classList.remove("flipped");
    isFlipped = false;

    updateExtraButtons();
}

// ----------------------------
// Update Hint / Details Buttons (Context-Sensitive)
// ----------------------------
function updateExtraButtons() {
    if (isFlipped) {
        // Showing back → show details only
        hintBtn.style.display = "none";
        detailsBtn.style.display = "inline-block";
    } else {
        // Showing front → show hint only
        hintBtn.style.display = "inline-block";
        detailsBtn.style.display = "none";
    }
}

// ----------------------------
// Flip Card
// ----------------------------
card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    isFlipped = card.classList.contains("flipped");
    updateExtraButtons();
});

// ----------------------------
// Next / Previous Buttons
// ----------------------------
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showCard();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showCard();
});

// ----------------------------
// Hint / Details Toggle
// ----------------------------
hintBtn.addEventListener("click", () => {
    const cardData = flashcards[currentIndex];
    if (hintText.textContent === "" && cardData.hint) {
        hintText.textContent = cardData.hint;
        hintBtn.textContent = "Hide Hint";
    } else {
        hintText.textContent = "";
        hintBtn.textContent = "Show Hint";
    }
});

detailsBtn.addEventListener("click", () => {
    const cardData = flashcards[currentIndex];
    if (detailsText.textContent === "" && cardData.details) {
        detailsText.textContent = cardData.details;
        detailsBtn.textContent = "Hide Details";
    } else {
        detailsText.textContent = "";
        detailsBtn.textContent = "Show Details";
    }
});

// ----------------------------
// Text-to-Speech (TTS)
// ----------------------------
function speakText(text) {
    if (!window.speechSynthesis) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Language selection by category
    if (category === "luxembourgish") {
        utterance.lang = "lb-LU"; // Luxembourgish
    } else {
        utterance.lang = "en-US";
    }

    speechSynthesis.speak(utterance);
}

// ----------------------------
// Speak Button (Custom Audio + TTS)
// ----------------------------
function speakFlashcard(cardData) {
    if (cardData.audio) {
        const audio = new Audio(cardData.audio);
        audio.play();
    } else {
        const textToSpeak = isFlipped ? cardData.answer : cardData.question;
        speakText(textToSpeak);
    }
}

speakBtn.addEventListener("click", () => {
    const cardData = flashcards[currentIndex];
    speakFlashcard(cardData);
});

// ----------------------------
// Initial Load
// ----------------------------
showCard();
