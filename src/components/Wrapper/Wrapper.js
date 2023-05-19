
import PropTypes from 'prop-types';

export default function WrapperForPhonebook({ children }) {
    return (
        <section>
            <span>Phonebook</span>
            {children}
        </section > 
    )
}
WrapperForPhonebook.propTypes = {
    children: PropTypes.node.isRequired,
}