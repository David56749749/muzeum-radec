// components/Map.js
"use client"
export default function InteractiveMap() {
    return (
        <div className='section section--bg-dark'>
            <div className='container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.03704178818!2d33.8417807!3d27.2179868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1452870e8e119225%3A0x7a9fd9ae9c57c70d!2z2LTYp9i32KYg2KfZhNmB2YrYsdmI2LIg2KfZhNit2YPZiNmF2Yo!5e0!3m2!1scs!2scz!4v1726770224407!5m2!1scs!2scz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}
