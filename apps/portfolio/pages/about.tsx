export function About() {
  return (
    <div>
      <h1 className="font-bold text-6xl">About Me</h1>
      <p className="mt-12">
        Hey there,my name is Tejas Namjoshi. I have been a software engineer
        since 2016. I work at Salucro Healthcare solutions.
        <br />I have been born and brought up in Pune. I pursued BE in computer
        science from 2011 - 2015. Then I went on to do my
        <b>PG-diploma in advanced computing</b> from Center for development of
        advanced computing. (CDAC Pune).
        <br />I have been a front-end engineer since I entered the software
        industry. I like trying out new technologies and writing code in
        general. I am always excited to try out new stuff and learn it.
        <br />
        <br />
        Below are the some of the projects that I worked on just for fun. You
        can find more sample practice projects on my
        <a
          href="https://github.com/tejasnamjoshi"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-500 hover:text-indigo-900 ml-1"
        >
          <span className="underline">github </span>
          <i className="fas fa-external-link-alt text-sm" />
        </a>{' '}
        page.
      </p>
    </div>
  );
}

export default About;
