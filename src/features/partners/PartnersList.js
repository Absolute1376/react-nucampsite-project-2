import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = selectAllPartners();
    
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