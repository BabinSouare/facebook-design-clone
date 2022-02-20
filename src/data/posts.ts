import nawonzon from './../assets/images/userPicture.png'
import gojo from './../assets/images/gojo.png'
import painTendo from './../assets/images/pain_tendo.jpeg'
import seiina from './../assets/images/seiina.jpg'
import saikou from './../assets/images/saikou.jpg'
import madiou from './../assets/images/madiou.jpg'
import yansane from './../assets/images/yansane.jpg'
import bornToCode from './../assets/images/bornToCode.jpg'
import jsImage from './../assets/images/javascript.png'

export default [
  {
    user: {
      picture: painTendo,
      username: 'Pain Tendo',
      online: true,
      hasStory: true,
      alreadySeenStory: false,
    },
    content: `L’amour engendre le sacrifice qui lui même engendre la haine… Et après la souffrance entre en jeu`,
    image: painTendo,
    time: '3mn',
  },
  {
    user: {
      picture: nawonzon,
      username: 'Nawonzon Diallo',
      online: true,
    },
    content: `Cabri mort est-ce qu’il peut mourir encore (noooo)\nOn est assis par terre, est ce qu’on peut tomber encore (noooo)`,
    time: '2h',
  },
  {
    user: {
      picture: seiina,
      username: 'Seiina Barry',
      hasStory: true,
      alreadySeenStory: false,
    },
    content: `Je ne fais que mangé j'invite jamais mon oncle. humm faut que je change`,
    image: seiina,
    time: '1h',
  },
  {
    user: {
      picture: gojo,
      username: 'Saïkou Bah',
      hasStory: true,
      alreadySeenStory: true,
    },
    content: null,
    image: saikou,
    time: '22h',
  },
  {
    user: {
      picture: madiou,
      username: 'Madiou Samantan',
      online: true,
    },
    content: `Mon visage est très très large mais quand mon bon grand nawonzon me le dit je me fâche`,
    image: madiou,
    time: '1mn',
  },
  {
    user: {
      picture: nawonzon,
      username: 'Nawonzon Diallo',
      hasStory: true,
      alreadySeenStory: false,
    },
    content: `Que dire 🤷‍♂️🤷‍♂️🤦‍♂️`,
    image: yansane,
    time: '3h',
  },
  {
    user: {
      picture: yansane,
      username: 'Mohamed Lamine Yansane',
    },
    content: `Mon très très bon grand nawonzon pour le quel j'ai tout le respect. Grand wallah mi dho respectouma 🙏`,
    image: nawonzon,
    time: '3mn',
  },
  {
    user: {
      picture: yansane,
      username: 'Mohamed Lamine Yansane',
      online: true,
      alreadySeenStory: true,
      hasStory: true,
    },
    content: `Au nom de Dieu je suis chauve hein. paaaaati`,
    time: '1mn',
  },
  {
    user: {
      picture: bornToCode,
      username: 'Born To Code </>',
      online: true,
      hasStory: true,
      alreadySeenStory: false,
    },
    content: null,
    image: jsImage,
    time: '10h',
  },
]
