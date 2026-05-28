import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, Flip);

const projects = [
  {
    title: 'airasia / american tourister',
    label: 'Photo/Video',
    image: 'https://framerusercontent.com/images/UU3GtY5tQEyD4SBToAUyD9FAJsg.jpg?scale-down-to=1024',
    href: '/projects/airasia',
    className: 'latest-projects__card--one',
  },
  {
    title: 'aape',
    label: 'Photo/Video',
    image: 'https://framerusercontent.com/images/WyUqqoduV40XoPN9Wt9xqpvy34.jpg?scale-down-to=1024',
    href: '/projects/aape',
    className: 'latest-projects__card--two',
  },
  {
    title: 'salomon / brand campaign',
    label: 'Photo/Video',
    image: 'https://framerusercontent.com/images/ZIKhDqAKcqJ9SnZ8BzyMcp4Hjc.jpg?scale-down-to=1024',
    href: '/projects/salomon-brand-campaign',
    className: 'latest-projects__card--three',
  },
  {
    title: 'ferrari',
    label: 'Photo/Video',
    image: 'https://framerusercontent.com/images/Hex6l6j0QNCYp1bf3dMIGG2duRI.jpeg?scale-down-to=1024',
    href: '/projects/ferrari',
    className: 'latest-projects__card--four',
  },
];

const LatestProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const slots = gsap.utils.toArray<HTMLElement>('.latest-projects__image-slot', section);
    const heroPhotos = [
      document.querySelector<HTMLElement>('.gakuyen-hero__photo--front'),
      document.querySelector<HTMLElement>('.gakuyen-hero__photo--back-right'),
      document.querySelector<HTMLElement>('.gakuyen-hero__photo--back-left'),
      document.querySelector<HTMLElement>('.gakuyen-hero__photo--lower'),
    ].filter(Boolean) as HTMLElement[];

    const ctx = gsap.context(() => {
      const fitValue = (
        photo: HTMLElement,
        slot: HTMLElement,
        key: 'x' | 'y' | 'rotation' | 'scaleX' | 'scaleY',
      ) => {
        const vars = Flip.fit(photo, slot, {
          getVars: true,
          scale: true,
        } as gsap.TweenVars) as gsap.TweenVars;

        return vars[key] ?? (key === 'scaleX' || key === 'scaleY' ? 1 : 0);
      };

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            end: 'top 6%',
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        })
        .to(
          heroPhotos,
          {
            x: (index, photo) => fitValue(photo as HTMLElement, slots[index], 'x'),
            y: (index, photo) => fitValue(photo as HTMLElement, slots[index], 'y'),
            rotation: (index, photo) => fitValue(photo as HTMLElement, slots[index], 'rotation'),
            scaleX: (index, photo) => fitValue(photo as HTMLElement, slots[index], 'scaleX'),
            scaleY: (index, photo) => fitValue(photo as HTMLElement, slots[index], 'scaleY'),
            borderRadius: 16,
            stagger: 0.015,
            ease: 'none',
          },
          0,
        )
        .fromTo(
          '.latest-projects__title-word',
          { y: 10, opacity: 0, filter: 'blur(5px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.04, ease: 'none' },
          0.18,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="latest-projects" ref={sectionRef}>
      <div className="latest-projects__container">
        <div className="latest-projects__header">
          <h2>
            <span className="latest-projects__title-word">Latest</span>{' '}
            <span className="latest-projects__title-word">Projects</span>
          </h2>
        </div>

        <div className="latest-projects__grid">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              className={`latest-projects__card ${project.className}`}
            >
              <span className="latest-projects__image-slot" aria-hidden="true" />
              <span className="latest-projects__overlay" aria-hidden="true" />
              <span className="latest-projects__label">{project.label}</span>
              <span className="latest-projects__meta">
                <span>{project.title}</span>
                <span className="latest-projects__view">
                  <ArrowUpRight size={15} strokeWidth={2.8} />
                  View Project
                </span>
              </span>
            </a>
          ))}
        </div>

        <a className="latest-projects__all" href="/projects">
          <span>View all my projects</span>
          <ArrowUpRight size={18} strokeWidth={2.4} />
        </a>
      </div>
    </section>
  );
};

export default LatestProjects;
