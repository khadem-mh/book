"use client"

type TestimonialCardImageProps = {
    src: string
}

const TestimonialCardImage: React.FC<TestimonialCardImageProps> = ({ src }) => {

    return (
        <>
            <img
                src={`/images/home/testimonials/${src}`}
                alt="img"
                className="w-20 h-20 object-cover rounded-2xl animate-[float_3s_ease-in-out_infinite]"
                style={{
                    animationName: "float",
                    animationDuration: "3s",
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                }}
            />
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
              }
            `}</style>
        </>
    )
}

export default TestimonialCardImage