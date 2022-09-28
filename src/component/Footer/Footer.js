import './Footer.css'
import React from 'react'

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer_1'>
                <i className="fa-solid fa-motorcycle fa-3x"></i>
                <div className='content'>
                    <h5>Nhận Giao Hàng</h5>
                    <span>
                        Giao thú cưng toàn các tỉnh Tây Nam Bộ,
                        giao trong ngày tại Tp.HCM. Giao phụ kiện, đồ dùng toàn quốc.
                    </span>
                </div>
            </div>

            <div className='Footer_1'>
                <i className="fa-solid fa-headset fa-3x"></i>
                <div className='content'>
                    <h5>Hỗ Trợ Mua Hàng</h5>
                    <span>
                        Alo tổng đài 028.7304.0479 để được tư vấn và hỗ trợ đặt hàng mua hàng và
                        giải đáp thắc mắc khi nuôi dưỡng thú cưng
                    </span>
                </div>
            </div>

            <div className='Footer_1'>
                <i className="fa-solid fa-piggy-bank fa-3x"></i>
                <div className='content'>
                    <h5>Giá Cả Hợp Lý</h5>
                    <span>
                        Sản phẩm đa dạng chủng loại và giá cả. Có Bảo hành với các loại thú cưng giá trị cao.
                        Chất lượng uy tín chi phí cạnh tranh
                    </span>
                </div>
            </div>

            <div className='Footer_1'>
                <i className="fa-brands fa-bitcoin fa-3x"></i>
                <div className='content'>
                    <h5>Ngập Tràn Khuyến Mãi</h5>
                    <span>
                        Chế độ hậu mãi hấp dẫn.
                        Với nhiều chương trình chăm sóc khách hàng thân thiết với rất nhiều ưu đãi và khuyến mại.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer