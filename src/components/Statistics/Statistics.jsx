import PropTypes from 'prop-types';
import css from './Statistics.module.css';

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
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(statEl => (
                    <li
                        style={{
                            backgroundColor: getRandomColor(),
                            width: `calc(100% / ${stats.length})`,
                        }}
                        key={statEl.id}
                        className={css.item}
                    >
                        <span className={css.label}>{statEl.label}</span>
                        <span className={css.percentage}>
                            {statEl.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
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
