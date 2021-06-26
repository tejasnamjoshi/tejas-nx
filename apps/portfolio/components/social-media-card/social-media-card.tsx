import './social-media-card.module.scss';

export interface SocialMediaCardProps {
  type: 'github' | 'twitter' | 'linkedin';
  href: string;
}

export function SocialMediaCard(props: SocialMediaCardProps) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <div className="border border-gray-500 rounded shadow-md p-12 cursor-pointer hover:shadow-2xl transform hover:scale-105  hover:text-indigo-700 transition duration-500 ease-in-out translate-x-0">
        <i className={`fab fa-${props.type} text-7xl`}></i>
      </div>
    </a>
  );
}

export default SocialMediaCard;
