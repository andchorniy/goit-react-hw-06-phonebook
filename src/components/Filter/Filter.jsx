import PropTypes from 'prop-types';
import style from './Filter.module.css'
const Filter = ({filter, handleChange}) => {
    return (
        <div>
            <label className={style.label}>
                Find contacts by name
                <input className={style.input} type="text" name="filter" value={filter} onChange={handleChange}/>
            </label>
        </div>
    );
};

Filter.propTypes={
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Filter;