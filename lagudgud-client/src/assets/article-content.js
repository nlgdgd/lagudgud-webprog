import Button from "../components/Button";

import lasvegas from "../assets/lasvegas.jpg";
import frankies from "../assets/frankies.jpg";
import kdrama from "../assets/kdrama.jpg";
import ambassador from "../assets/ambassador.jpg";
import badangel from "../assets/badangel.jpg";
import oneBillion from "../assets/oneBillion.jpg";
import bigbang from "../assets/bigbang.jpg";
import rayban from "../assets/rayban.jpg";

const articles = [
    {
        name: "By-Gil-Kaufman", // string
        title: "LISA Makes History with 'Viva La Lisa' Las Vegas Residency", // string
        image: lasvegas,
        
        // list --> string
        content: [
            "The global stage is officially set for a historic moment in music. This residency cements LISA's status not just as a K-pop idol, but as a dominant, versatile force in global entertainment, joining the ranks of icons like Adele and Usher who have called The Colosseum home.",
            "BLACKPINK’s LISA has announced her first-ever solo Las Vegas residency, titled 'Viva La Lisa', scheduled for November 2026.",
            "Taking place at the prestigious Colosseum at Caesars Palace, this limited engagement marks a massive milestone: LISA will be the first-ever K-pop artist to headline a residency on the Las Vegas Strip.",
            "Given the intimate scale of The Colosseum compared to her usual stadium tours, demand is expected to be unprecedented."
        ]
    },
    {
        name: "By-Sara-Delgado",
        title: "BLACKPINK's Jennie Designed Her Frankies Bikinis Collection to Feel Like 'Natural Extension' of Herself",
        image: frankies,
        content: [
            "Global fashion icon and BLACKPINK member JENNIE has officially launched her collaborative capsule with Frankies Bikinis, a collection designed to be much more than just swimwear.",
            "Speaking with Teen Vogue, JENNIE revealed that her primary goal was to create pieces that felt like a 'natural extension' of her own wardrobe — blending high-fashion silhouettes with the 'off-duty' comfort she is known for.",
            "The collection, which debuted in early April 2026, focuses on versatility. Rather than being confined to the pool or beach, the pieces are designed with a 'swim-to-street' philosophy.",
            "Unlike many celebrity collaborations, JENNIE was involved in every step of the process. From selecting the color palette (which features soft pastels and classic neutrals) to choosing the fabrics (focusing on soft knits and sun-faded washes), her thumbprint is on every item."
        ]
    },
    {
        name: "By-E-cha",
        title: "'Boyfriend On Demand' And BLACKPINK's Jisoo Top Most Buzzworthy Drama And Actor Rankings",
        image: kdrama,
        content: [
            "Netflix’s “Boyfriend on Demand” and its lead actress, BLACKPINK’s Jisoo, have dominated this week’s rankings of the most buzzworthy dramas and actors.",
            "According to Good Data Corporation, the series secured the No. 1 spot on the drama list, while Jisoo rose to the top of the actor rankings followed by her co-stars Seo In Guk and Seo Kang Jun.",
            "Other notable entries included tvN’s “Undercover Miss Hong,” which held strong at No. 2 with lead Park Shin Hye, and the new thriller “Siren’s Kiss” debuting at No. 3.",
            "The weekly rankings are determined by analyzing data from news articles, social media, and online communities to identify the shows and stars generating the most public interest."
        ]
    },
    {
        name: "By-Susan-Han",
        title: "BLACKPINK's Rosé scores newest global ambassadorship with 'Levi's'",
        image:ambassador,
        content: [
            "BLACKPINK’s Rosé has officially been named the newest global ambassador for the iconic denim brand Levi’s.",
            "This major partnership follows her surprise appearance in the brand's 'Behind Every Original' campaign, which debuted during the 2026 Super Bowl LX.",
            "According to industry reports, the multi-year deal will go beyond modeling and is set to include an exclusive product collaboration between the singer and the brand.",
            "Fans can look forward to seeing Rosé showcase classic Levi's styles through various global promotional activities and her personal fashion looks."
        ]
    },
    {
        name: "By-Sofia-Sayson",
        title: "BLACKPINK LISA and Anyma join forces for the new collaboration single 'Bad Angel'",
        image: badangel,
        content: [
            "BLACKPINK’s LISA and renowned DJ Anyma have released their highly anticipated collaboration single, 'Bad Angel,' a hypnotic track that blends cinematic techno with dynamic vocals.",
            "Dropped on April 9, the song arrived just ahead of Anyma's scheduled performances at Coachella, where he serves as a major headliner.",
            "The accompanying music video, created by Anyma and starring LISA, features hyper-real digital environments that explore themes of identity and transcendence.",
            "Both artists expressed excitement over the partnership, with Anyma describing LISA as his 'muse' and LISA highlighting her long-standing interest in exploring the EDM genre."
        ]
    },
    {
        name: "By-Yonhap",
        title: "BLACKPINK's 'Ice Cream' music video surpasses 1 billion YouTube views",
        image: oneBillion,
        content: [
            "BLACKPINK’s music video for their 2020 hit 'Ice Cream' officially surpassed 1 billion views on YouTube on April 16, 2026, marking a significant milestone for the group.",
            "This collaborative track with American pop star Selena Gomez is the group’s 10th music video to reach the billion-view mark, the highest number for any K-pop act to date.",
            "Featured on their first studio album, The Album, the song originally debuted at No. 13 on the Billboard Hot 100, showcasing the group's massive global appeal.",
            "This achievement highlights BLACKPINK's continued dominance in the digital space as they remain the most-viewed K-pop artist on the platform."
        ]
    },
    {
        name: "By-Demian09",
        title: "BLACKPINK’s Rosé and Lisa spotted enjoying Big Bang’s Coachella performance",
        image: bigbang,
        content: [
            "BLACKPINK’s Rosé and Lisa were recently spotted enthusiastically supporting their seniors, BIGBANG, during the group's highly anticipated performance at Coachella 2026.",
            "Rosé shared a video on social media singing along to the hit song “BAD BOY,” while additional fan-captured clips showed the two members dancing and cheering throughout the set.",
            "The members of BIGBANG—G-Dragon, Taeyang, and Daesung—delivered a powerful 60-minute performance that included fan favorites like 'BANG BANG BANG' and 'WE LIKE 2 PARTY.'",
            "This heartwarming display of labelmate support drew significant attention online, highlighting the strong bond between the two global K-pop powerhouses during BIGBANG's 20th-anniversary celebrations."
        ]
    },
    {
        name: "By-Frank-Tanner",
        title: "Jennie Named Global Ambassador For Ray-Ban & Ray-Ban Meta Smart Glasses",
        image: rayban,
        content: [
            "BLACKPINK’s Jennie has been named the new global ambassador for both Ray-Ban and Ray-Ban Meta, marking the first time the brand has unified its classic and smart eyewear under one campaign.",
            "The partnership highlights the singer's influence in bridging the gap between heritage style and wearable technology, featuring her in visuals that utilize distinct color palettes for each eyewear line.",
            "Jennie expressed that the collaboration felt natural, describing Ray-Ban’s energy as simple and expressive, which aligns with her personal philosophy of quiet confidence.",
            "By leveraging her massive social media presence, the campaign aims to position the Ray-Ban Meta smart glasses as a daily lifestyle essential rather than just a high-tech gadget."
        ]
    }
];

export default articles;