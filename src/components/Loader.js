export function Loader(props) {
    const { isLoading } = props;

    if (!isLoading) {
        return null;
    }

    return (
        <div className="loader-container">
            <div className="loader">Loading...</div>
        </div>
    );
}