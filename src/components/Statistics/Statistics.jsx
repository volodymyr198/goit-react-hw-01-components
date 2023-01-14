import PropTypes from 'prop-types';
import * as style from './Statistics.styled';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const Statistics = ({ title, stats }) => {
    return (
        <style.StatSection>
            {title && <style.StatTitle>{title}</style.StatTitle>}
            <style.StatList>
                {stats.map(statEl => (
                    <style.StatItem
                        style={{
                            backgroundColor: getRandomColor(),
                            width: `calc(100% / ${stats.length})`,
                        }}
                        key={statEl.id}
                    >
                        <style.Label>{statEl.label}</style.Label>
                        <style.Percentage>
                            {statEl.percentage}%
                        </style.Percentage>
                    </style.StatItem>
                ))}
            </style.StatList>
        </style.StatSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};
