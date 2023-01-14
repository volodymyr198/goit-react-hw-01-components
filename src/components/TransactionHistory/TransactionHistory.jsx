import PropTypes from 'prop-types';
import * as style from './TransactionHistory.styled';

const ucFirst = str => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
};

export const TransactionHistory = ({ items }) => {
    return (
        <style.Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <style.Tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{ucFirst(type)}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </style.Tbody>
        </style.Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};
