import React from 'react';
class StateandLifecycle extends React.Component {
    render() {
        return (
            <>
                <div className='w-75 border mx-auto bg-light rounded rounded-3' style={{ minHeight: '400px' }}>
                    <h1 className='text-warning text-center'>Date Function</h1>
                    <h4 className='text-center'>Grinvich o'rtacha vaqti</h4>
                    <p>
                        {/* Date() bu muayan vaqtni belgilaydi. */}
                        {Date()}
                    </p>
                    <hr />
                    <h4 className='text-center'>Grinvich o'rtacha vaqti katta alifbo hariflarida</h4>
                    <p>
                        {/* barcha hosdan kelgan date ma'lumotlarni alifbo hariflarining katta hariflarida belgilash */}
                        {Date().toLocaleUpperCase()}
                    </p>
                    <hr />
                    <h4 className='text-center'>Grinvich o'rtacha vaqti kichik alifbo harflarida.</h4>
                    <p>
                        {/* barcha hosdan kelgan date ma'lumotlarni alifbo hariflarining kichik hariflarida belgilash */}
                        {Date().toLocaleLowerCase()}
                    </p>
                    <hr />
                    <h4 className='text-center'>Joriy Yil Oddiy String Ko'rinishida.</h4>
                    <p>
                        {/* hozirgi hafta / oy / kun / yil ma'lumotini ekranga string tipida chiqarib beradi. */}
                        {this.props.date.toDateString()}
                    </p>
                    <hr />
                    <h4 className='text-center'>Joriy Yil</h4>
                    <p data-now-time='date-day-year'>
                        {/* getDate, getDay, getFullYear bular mos ravishda hozrgi  kun, oy , yil ma'lumotlarini ekranga chiqarib beradi. */}
                        {this.props.date.getDate()}/
                        {this.props.date.getDay()}/
                        {this.props.date.getFullYear()}
                    </p>
                    <hr />
                    {/* Hozrgi vaqtning aniq ma'lumotlarini ekranga namoyish etadi. */}
                    <p>
                        <h4 className='text-center'>Joriy Vaqt</h4>
                        {this.props.date.getHours()}: {/* hozr mavjud bo'lgan soat ekranga string tipida uzatiladi */}
                        {this.props.date.getMinutes()}: {/* hozr mavjud bo'lgan minut ekranga string tipida uzatiladi */}
                        {this.props.date.getSeconds()}: {/* hozr mavjud bo'lgan sekond ekranga string tipida uzatiladi */}
                        {this.props.date.getMilliseconds()} {/* hozr mavjud bo'lgan milliysekund ekranga string tipida uzatiladi */}
                    </p>
                    <hr />
                    <p>
                        <span>Hozrgi hafta kuni </span>{this.props.date.getMonth() - 1} <br />
                        <span>0 - yildan to hozrgi 2022-yilgacha bo'lgan umumiy vaqt jadvali = </span>{this.props.date.getTime()}
                    </p>
                    <hr />
                    <p>
                        {/* belgilangan qiymatlarnign son qiymatini chiqarib beradi. */}
                        {this.props.date.setDate(2002)} <br />
                        {this.props.date.setFullYear(2002, 5, 12)}
                    </p>
                    <hr />
                </div>
            </>
        )
    }
}

export default StateandLifecycle