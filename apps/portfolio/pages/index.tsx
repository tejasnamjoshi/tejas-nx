import React from 'react';

import SocialMediaCard from '../components/social-media-card/social-media-card';

export function Index() {
  return (
    <div>
      <h1 className="text-5xl text-left">Hey, I am Tejas</h1>
      <h2 className="text-md mt-4 dark:text-gray-400">
        I'm an engineer who is passionate about computers & programming. I have
        been working as a developer since 2016.
      </h2>

      <p className="my-8 text-center text-xl">
        You can follow me on the below sites
      </p>
      <div>
        <ul className="flex flex-wrap justify-center">
          <li className="m-4">
            <SocialMediaCard
              type="github"
              href="https://github.com/tejasnamjoshi"
            />
          </li>
          <li className="m-4">
            <SocialMediaCard
              type="twitter"
              href="https://twitter.com/Tejasnamjoshi1"
            />
          </li>
          <li className="m-4">
            <SocialMediaCard
              type="linkedin"
              href="https://www.linkedin.com/in/tejas-namjoshi-06b536117/"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;
