// handles AI requests

const express = require('express')
const axios = require('axios')
const router = express.Router()
const UserQuestion = require('./userquestion')

const context = `Music and Mood
Listening to (or making) music increases blood flow to brain regions that generate and control emotions.2 The limbic system, which is involved in processing emotions and controlling memory, “lights” up when our ears perceive music.3

The chills you feel when you hear a particularly moving piece of music may be the result of dopamine, a neurotransmitter that triggers sensations of pleasure and well-being.4-5 As your brain becomes familiar with a particular song, your body may release dopamine upon hearing just the first few notes of the song. Just as Pavlov’s dogs learned to associate food with a ringing bell – and eventually began drooling at the sound of a bell, even when no food was in sight – our bodies actively anticipate pleasure upon hearing familiar notes.

Interestingly, music can affect our mood even if we can’t recognize or replicate the notes and rhythm. Science has documented numerous instances of people who suffered brain injuries and lost their ability to distinguish melodies but retained the ability to recognize the emotion conveyed by music.6 Researchers noted that these patients had sustained damage to the temporal lobes of the brain, a region involved in comprehending melody; their frontal lobes, which play a role in emotional regulation, were unaffected.7

Music and Memory
Music is complex; it involves pitch, timbre, rhythm, dynamics and so much more. Decoding music is quite a task for the brain, as it must “integrate the sequentially ordered sounds into a coherent musical perception,” according to an article published in the Journal of Biology.8

The mental processes involved in knitting individual sounds together into the overall perception of a song is quite similar to the process the brain goes through in reading, which involves first recognizing individual letters and sounds and then ultimately gleaning meaning from sentences and paragraphs. Working memory is involved in both processes, and scientists believe there’s a great deal of overlap between working memory for musical stimuli and for verbal stimuli.9

Emotions, of course, enhance memory. Most adults can still recall every word of the songs they loved in high school – largely because adolescence is a time of heightened emotion.10 (The fact that most of us played those songs over and over also helps!)

Evidence suggests that listening to music may help brain cells process information more efficiently and may facilitate the brain’s ability to adapt.11-12 According to a study published in the scientific journal Brain, adults who suffered a stroke and listened to music daily experienced significantly greater gains in verbal memory and cognition after two months than stroke survivors who listened to audio books and those who didn’t listen to either music or books on a daily basis.13

Music and Pain Relief
Women listen to music when in labor, and loved ones frequently play music while sitting with family members who are close to death. The pain-relieving tendencies have music has been ascribed to music’s ability to distract; when our minds are focused on a beloved melody, we don't notice our aching back quite as much.14 Music also increases overall feelings of well-being (thank you, dopamine!), which may decrease pain perception.15

Some scientists suspect that music’s effect on the physical body, though, may be at least partially rooted in the fact that sound waves are ultimately vibrations.16 Vibroacoustic therapy uses low frequency sound to produce vibrations that are applied directly to the body. At least seven scientific studies have shown improvement in motor function in individuals with cerebral palsy treated with vibroacoustic therapy.17

It may take scientists years to fully untangle music’s actions in the brain. Thankfully, we can enjoy music’s benefits without fully understanding the science. Does Music Alter Moods and Relieve Stress?
The short answer is, yes! The Iso-principle is a tool that matches a music listening experience to a current mood or emotion and then gradually shifts to music that represents a desired mood or emotion. If you want to listen to a song that you pair with anger or sadness, go ahead, but don’t let it repeat too many times. Move on to music of the mood you desire. A music playlist that gradually moves from uncomfortable emotions to comfortable ones can be a healthy coping strategy and facilitate a positive mood change.

Active music-making positively affects neurotransmitters, such as dopamine and serotonin, that influence mood. Dopamine influences focus, concentration, memory, sleep, mood and motivation. Likewise, serotonin impacts mood, sleep patterns, anxiety and pain. Active music-making can involve singing, playing an instrument or creating music electronically. Making music, specifically singing in a group, helps us feel connected to other people because of the production of the hormone oxytocin. Singing synchronizes breathing patterns to promote relaxation and reduce the hormone cortisol, “the stress hormone.”

What Emotions Can Music Make You Feel?
Music can validate your current emotional state and influence your emotional destination. Again, the Iso-principle can help us experience desired emotions. It works most effectively when we first find a song that matches our current feeling or mood. In music therapy, emotional regulation is frequently addressed. Music can elicit many, if not every, emotion. Knowing yourself and which music you pair with your emotions will improve self-regulation, or “feeling your feelings.”

Music and emotions are personal, cultural and associated with prior experiences. A song will not give everybody the same feeling. That is the beauty of the diversity in music and preference across diverse cultures and time periods. Research attributes this phenomenon to the messages our cultures and experiences have assigned to sounds before listening to a song.

While culture, memories and associations influence music and emotions, Berkley found an overlap across cultures and compiled an interactive music map based on people’s responses with 13 emotional dimensions that people in China and the United States self-reported. You can check Berkley’s Interactive Music Map to find out what music makes you feel.

What Impact Does Music Have on Memory?
Music can help retain essential information despite memory loss. Music memory is stored in the hippocampus, centrally located in the brain. Therefore, music memories are less likely to be negatively impacted by age or disease.

A musical mnemonic device is a natural way to memorize and recall information. As children, we learn various academic and social concepts through songs. Similarly, these memory strategies are highly effective for adults. In fact, our brains automatically “fill in the gaps” when a song suddenly stops.

Music therapists often incorporate these techniques with individuals to improve memory retention or developmental learning goals. Music may activate memories and remind us of places, events or people. A familiar tune may elicit the emotions associated with those memories.

What Changes Does Music Have on Your Body?
Singing, playing instruments and even dancing can improve pain tolerance. Researchers found that the physical movement used to create music provides a synchronized activity that significantly heightens the pain threshold. Music therapists are specifically trained clinicians that use music to address goals such as pain reduction.

Because music is often an enjoyable activity, it can activate the release of endorphins, which creates a general feeling of well-being. Music therapy can successfully reduce post-operative pain, physical tension and influence heart and breathing rates. Fast music tends to increase pulse rate and blood pressure. Slow music tends to decrease pulse rate and blood pressure, as well as breathing rate.

How Does Music Affect Behavior?
Music can affect behavior by being a motivator, a timer for completing tasks or a mood enhancer. It may also impact our shopping habits.

Music is used in advertising to encourage brand recognition and create familiarity and positive association with various products.

Younger shoppers spend more time shopping when stores play instrumental music. Older shoppers spend more time shopping when there’s music playing with lyrics. Baby boomers are likely to spend more money if classic rock is playing in a store. Generations older than baby boomers are less likely to spend money if any music is playing.

If you are buying wine for the holidays, be aware that classical music may make you feel comfortable spending a little more money than those top 40 hits.

Store associates are another group of people who are highly influenced by music. People who work in retail are more likely to engage with customers and be in a positive mood if they don’t have to listen to the same music all day.

Why Do We Enjoy Holiday Music?
Holiday music is a vehicle that communicates sacred and secular stories of the season. People may enjoy holiday music because pivotal cultural and traditional events are often intertwined. Music fosters community, remembrance and celebrations.

Known as the Festival of Lights, Hanukkah is often associated with music and dancing. Starting at nightfall in Jerusalem, you are likely to hear people singing “Ma’oz Tzur.” In some families, singing songs while lighting the menorah candles is part of their valued traditions.

Christmas music can be associated with sacred or secular aspects of people’s lives. People decorate houses combining lights with music. Families drive down streets playing Christmas music to create memories with their children. Caroling in neighborhoods, or a similar tradition called Parrandas in Puerto Rico, includes singing to and with your communities using traditional music and instruments.

Falling directly after Christmas, Kwanzaa is a non-religious and non-political holiday originated to bring Black Americans together. Music in Kwanza includes storytelling, dancing, drumming and singing. Established in 1966, the holiday commemorates the African heritage of many Black Americans’ history, culture and traditions.

While many people have fond memories and traditions with holiday music, it is important to be mindful. Some people have equally painful memories associated with holiday music or songs.Music can increase focus, help to manage stress, or improve mood during times of sadness.

It has long been understood that music impacts our feelings and mood, but the reasons for that impact have not been studied until very recently. Now, brain scans and psychological research are discovering how the mechanisms that lead to mood changes or mood regulation are associated with music.


Why Do We Listen to Music?
In a psychological survey conducted in 2013 examining the reasons why people listen to music, the analysis found that people listen to music to:

Regulate mood and stress (arousal).
Achieve self-awareness.
Express social relatedness.
The first two reasons in this list were found to be more important than the third. Music was reported to be deeply personal, often used in the foreground as a way of improving motivation or focus, or used in the background as a means of regulating mood and easing stress. Using music as a method of relating to friends or family, identifying culturally, or expressing oneself to peers was less common.

Most psychological studies involving music have been conducted on people in the westernized world, but some cross-cultural studies have found that unfamiliar music from other cultures can still be interpreted in similar ways. For example, Western listeners could tell whether a song was intended to be happy or sad even when it was from an unfamiliar culture like Navajo Native American or Hindustani. A survey conducted of people in a remote tribe living in Cameroon found that most listeners easily identified when Western music was happy or sad.

For example, listeners agreed that when songs were soft or slow, they were supposed to reflect sadness; jaunty and fast-paced music at a moderate volume was interpreted as happy. It seems that, across cultures, certain features of music are common to all experiences, suggesting that they developed in similar ways to regulate or inspire similar emotional experiences.  


How the Reward System and Dopamine Relate to Music
One of the first studies on the emotional association with music was conducted by Leonard Meyer in 1956. Meyer analyzed the fifth movement in Beethoven’s masterpiece, String Quartet in C-sharp major, Op. 131. After examining the tonal changes and measures, Meyer concluded that creating unfulfilled expectations caused suspense and tension in the listener, which leads to the emotional response to fulfilled expectations.

Listening to music triggers physical changes that indicate emotional arousal. For example, listening to our favorite songs will make us happy, which is indicated by the following:

Dilated pupils
Rising blood pressure
Faster pulse
Lowered electrical conductance on the skin
Activation of areas of the brain involved in physical movement
The cerebellum is highly activated by our favorite songs, triggering increased blood flow to the legs. This may be part of why dance is so closely associated with nearly every genre of music. The region of the brain most impacted by almost every type of music in the world is also the area that makes us want to move, even if this is just tapping our feet or bobbing our heads.

One study conducted by Montreal researchers closely examined the brains of 217 volunteers, looking for people who experienced “chills” when listening to music. They narrowed the group down to 10 study subjects and then watched that group’s brains as they listened to playlists of their favorite songs.

Though the group was small, the playlists stretched across dozens of genres, representing a wide range of music tastes. Images from the brains of these 10 participants found that favorite music releases dopamine in two places in the brain: the dorsal and ventral striatum. These areas typically light up from pleasurable stimuli, whether it is a hug or a drug; however, the team concluded that music could effectively trigger this release as well.

The Montreal research team also found that listening to favorite music caused an “anticipatory effect,” similar to a Pavlovian response of excitement. This effect occurred during familiar, expected, but enjoyed swells or changes in the songs. This anticipation effect was also found in people who were unfamiliar with the song, but who expected certain patterns in the music that did not pay off until later or even at the end of the song.


Emotional Perception When Listening to Music
In 2012, a research team at the University of Groningen in the Netherlands found that music deeply impacted what the listeners perceived were their emotions. The two lead psychologists asked participants to rank their happiness or sadness using emoticons. They found that, while listening to music, participants rarely used the neutral facial expression response even when no smiling emoticon was shown as an option.

They concluded that this represented a “top-downprocess”in the brain, when the mind interprets something about the world that is not inherently there. The most common example of this is when you interpret something about your surroundings based on what you see. The 2012 research found that there was an emotional top-down process, similar to the visual top-down process, which occurred when examining one’s own emotions.

Another study compared songbirds experiencing bird songs to humans experiencing music. They found that both birds and humans experienced changes in their amygdala with some kinds of music. For birds, the songs were discordant, while for humans, the music was categorized as “melancholy” or about “unrequited love.” Songs that triggered a rush of limerence or new love tapped into the mesolimbic reward system in both humans and birds.

Yet another 2012 study, published in the Journal of Consumer Research, reported that ambient noise at a moderate volume of about 70 decibels, which is about the volume of a vacuum cleaner, could improve creativity. Listening to louder noise than that, however, reduced creativity through distraction. Music without lyrics could be a form of ambient, soothing noise to improve not just mood, but also productivity and creativity.

A study conducted in 2013 reported that people who listened to upbeat music improved their moods and happiness, in the long term, within two weeks. The first of two listed studies found that listening to 12 minutes of music associated with positive mood intentionally elevated mood compared to a group who listened to any music without focusing on improving their mood.

In the second study, participants were instructed to listen to music with a happy valence. One group was told to intentionally improve their mood while listening, and the other group was not given other instructions. Those in the second study who were told to focus on being happier while listening to happy music reported greater elevation in mood compared to the other group.

Music Reduces Stress
Repeated studies have shown that music can reduce the experience of stress and improve overall well-being.

Listening to music has been associated with direct effects on physiological aspects of stress. Study participants showed lower cortisol levels, heart rate, and blood pressure when they listened to music, helping to calm the body and promote relaxation.

In addition, a meta-analysis of various studies on the connection between music and stress relief found that music had a psychological effect on stress in addition to a psychological effect. Study participants experienced improvements in worry, anxiety, and restlessness when they listened to music.

It's widely accepted that listening to music is a good strategy to manage stress, emotions, and overall mood.

Music as Therapy
Music has many benefits in therapeutic settings, including the use of music in standard clinical settings as well as specialized music therapy.

Music can calm anxiety, lessen the experience of pain, and distract patients from uncomfortable aspects of a clinical visit or procedure. It can also improve mood and increase empathy in caregivers. In these instances, music is a low-cost intervention that can improve experiences for patients, clinicians, and caregivers.

Specialized music therapy involves using music — listening to it, creating it, or thinking about it — to improve well-being. Therapists may incorporate various aspects of music into sessions with clients in either individual or group settings. The incorporation of music into sessions may enable clients to express themselves more openly, find new areas of emotional release, and better process emotions.

Music therapy can benefit a variety of mental health disorders, including depression, anxiety, and schizophrenia.

Music Ignites Passion & Imagination
There’s no question that listening to music is a universal experience with various benefits to both physical and mental health. It can be used in a variety of settings to ease stress, inspire confidence, and increase productivity.

Music can have a deep impact on mood, and this can easily affect overall quality of life.`

router.post('/ask', async (req,res)=>{
    const {question} = req.body 


    try {
        
        const response = await axios.post(
           'https://api-inference.huggingface.co/models/deepset/roberta-base-squad2',
           
        {
            inputs: {
                question,
                context
            }
        },

        {
            headers: {
                Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`
            }
        }
     )



    const answer = response.data?.answer?.trim() || "Sorry, no answer found.";

    await UserQuestion.create({question, answer})


    res.json({answer})
    } catch (err){
        console.error("Error in /ask:", err.response?.data || err.message);
        res.status(500).json({error: "Something went wrong"})
    }

});


module.exports = router; 