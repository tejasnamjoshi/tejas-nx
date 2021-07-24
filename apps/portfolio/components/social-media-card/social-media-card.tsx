import './social-media-card.module.scss';

export interface SocialMediaCardProps {
  type: 'github' | 'twitter' | 'linkedin';
  href: string;
}

export function SocialMediaCard(props: SocialMediaCardProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${props.type}: ${props.href}`}
    >
      <div className="border border-gray-500 rounded shadow-md p-12 cursor-pointer hover:shadow-2xl transform hover:scale-105  hover:text-indigo-700 transition ease-in-out">
        <i aria-hidden="true" className={`fab fa-${props.type} text-7xl`} />
      </div>
    </a>
  );
}

export default SocialMediaCard;
