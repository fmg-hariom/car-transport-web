import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'Our Services',
  skills: [
    {
      id: getId(),
      title: 'Best Car Transportation Company',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Transporting your car is one of the most stressful aspects of relocating.',
        'Driving your car to the new location involves long distances, potential driving damage, and safety risks.',
        'Hiring a reliable and professional car transport service is a smart decision to ensure your car is moved safely, reducing stress and uncertainty.',
        'Vishu Car Transport guarantees fast and efficient delivery of cars and other vehicles at competitive and cost-effective prices.',
        'We offer both single and multiple car carriers for transporting vehicles to your new location.',
        'Thousands of satisfied customers have benefited from our professional and reliable moving services.',
        'Our drivers are authorized, experienced, and well-trained in safety protocols, ensuring the secure transport of your vehicles.',
        'All transportation is carried out with the highest level of protection and care for your car or any other vehicle.',
      ],
      // softwareSkills: [
      //   // iconify icons: https://icon-sets.iconify.design/
      //   { name: 'html-5', icon: 'vscode-icons:file-type-html' },
      //   { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
      //   { name: 'sass', icon: 'vscode-icons:file-type-sass' },
      //   { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
      //   {
      //     name: 'typeScript',
      //     icon: 'vscode-icons:file-type-typescript-official',
      //   },
      //   { name: 'nodejs', icon: 'logos:nodejs-icon' },
      //   { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
      //   { name: 'reactjs', icon: 'logos:react' },
      //   { name: 'nextjs', icon: 'logos:nextjs-icon' },
      //   // { name: 'angularjs', icon: 'logos:angular-icon' },
      //   { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
      //   { name: 'redux', icon: 'logos:redux' },
      //   { name: 'database', icon: 'vscode-icons:file-type-sql' },
      //   { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      // ],
    },
    // {
    //   id: getId(),
    //   title: 'UI/UX designing',
    //   lottie: {
    //     light: '/lotties/designing.json',
    //     dark: '/lotties/designing-dark.json',
    //   },
    //   points: [
    //     'Experience in designing user-friendly interfaces with figma',
    //     'Experience in developing design systems and style guides',
    //     'Providing user-friendly design solutions',
    //   ],
    //   // softwareSkills: [
    //   //   { name: 'figma', icon: 'logos:figma' },
    //   //   { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
    //   //   { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
    //   // ],
    // },
  ],
};
