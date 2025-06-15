import './Paragraph.css';

export function Paragraph({ text, fontSize }){
	return(
		<p className="site-paragraph" style={{fontSize: fontSize}}>{text}</p>
	);
}