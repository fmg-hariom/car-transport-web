import { NavbarSectionType } from '@/lib/types/sections';
// import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'services', url: '/#services' },
    { name: 'gallery', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact us', url: '/#contact' },
  ],
  // cta: {
  //   title: 'resume',
  //   url: `/${resumeFileName}`,
  // },
};
