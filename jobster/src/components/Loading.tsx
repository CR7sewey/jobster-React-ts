const Loading = ({ center }: { center: string }) => {
    return <div className={center ? 'loading loading-center' : 'loading'}></div>;
};
export default Loading;