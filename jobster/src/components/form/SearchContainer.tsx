import { Form } from 'react-router-dom'
import { FormSelect } from './FormSelect';
import { JobOptionsType, SortOptions, StatusValues } from '../../utils/types';
import { FormInputText } from './FormInputText';
import Wrapper from '../../assets/wrappers/SearchContainer';

export const SearchContainer = () => {
    return (
        <Wrapper>
            <Form className='form'>
                <h4>Search Form</h4>
                <div className='form-center'>
                    <FormInputText name='search' labelText='search' type='text' />
                    <FormSelect values={StatusValues} defaultValue='pending' name='status' labelText='status' />
                    <FormSelect values={JobOptionsType} defaultValue='all' name='type' labelText='type' />
                    <FormSelect values={SortOptions} defaultValue='all' name='sort' labelText='sort' />
                    <button type='submit' className='btn btn-block btn-hipster'
                    >Clear Filters</button>
                </div>
            </Form>
        </Wrapper>
    )
}
