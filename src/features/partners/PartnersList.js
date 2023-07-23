import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    
    console.log(partners)
    
    return (
        <Col className='mt-4'>
            {partners.map(p => {
                return (
                    <div className='d-flex mb-5' key={p.id}>
                        <Partner partner={p}/>
                    </div>
                )
            })}
        </Col>
    )
}

export default PartnersList;