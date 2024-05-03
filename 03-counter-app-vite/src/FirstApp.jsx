import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle = 'No hay numero', name} ) =>  {


    return (
        <>
        <h1 data-testid="test-title">{ title }</h1>
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{ name }</p>
        </>
    )

}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = ({
    name: 'Santiago Pulido',
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo'
    
})
  