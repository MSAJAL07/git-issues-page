import './style.css'

const Labels = ({ labels }) => (
    <div className='LabelsWrapper'>
        {
            labels.length > 0
            && labels.map(({ id, color, name }, index) => (
                <span className='Label'

                    style={{ backgroundColor: color ? `#${color}` : '#fff' }}
                    key={index}
                >
                    {name}
                </span>
            ))
        }
    </div>
);

export default Labels;



