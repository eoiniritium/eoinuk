const Redirect = (route) => {
    const path = route.path;

    window.location.href = path;
}

export default Redirect;