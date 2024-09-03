'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import {
  AuthorImage,
  Link,
  ListItem,
  Wrapper,
  ImageContainer,
} from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation} className="px-10">
      <h2 className="heading-secondary text-center">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-center lg:flex-col">
        <ImageContainer src={img} alt={author.name} />
        <div className="w-full">
          {/* <p> */}
          Vishu Car Transport is your go-to platform for reliable car and bike
          transportation services. Though we are a new company, we are
          passionate about making vehicle moving as smooth and hassle-free as
          possible. Our services aren’t confined to just one country; we offer
          car and bike transportation both within India and internationally.
          Whether you need to move your vehicle across town or across the globe,
          Vishu Car Transport is here to ensure your peace of mind every step of
          the way. <br />
          <br />
          We understand the stress that comes with transporting vehicles, and we
          know how much your cars and bikes mean to you. That’s why our team of
          dedicated professionals is committed to providing more than just a
          service—we aim to deliver a seamless experience that exceeds your
          expectations. At Vishu Car Transport, we don’t just see this as work;
          we see it as an opportunity to make life easier for our clients. We
          start by listening carefully to your needs so that we can create a
          customized plan tailored specifically to you. We’re also here to
          answer any questions you have, ensuring there’s always clear
          communication. <br />
          <br />
          Before we begin the transportation process, we take special care to
          pack your vehicles securely, minimizing any risk during transit. Our
          team at Vishu Car Transport works tirelessly to ensure that your cars
          and bikes reach their destination in perfect condition. We believe in
          transparency, so our policies, terms, and conditions are always clear
          and straightforward, leaving no room for surprises after you’ve booked
          our services. Booking our car and bike transportation services is easy
          and convenient. You can either visit our office or book online by
          filling out the form on our official website. Once you’ve booked, you
          can leave the rest to us. We offer highly customizable services to
          meet the unique needs of each client, and you’ll find our pricing
          competitive within the industry.
          {/* </p> */}
          {/* {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )} */}
        </div>
        {/* <AuthorImage src={img} alt={author.name} /> */}
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
