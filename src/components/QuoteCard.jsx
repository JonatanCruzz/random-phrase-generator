import './QuoteCard.css'

const QuoteCard = ({ quote, handleChangeQuote }) => {

    return (
        <section className='quoteCard'>

            <article className='quoteCard__container'>

                <h1 className='quoteCard__title'>DATACOSMOS</h1>

                <p className='quoteCard__paragraph'>{quote.phrase}</p>

                <button className='quoteCard__btn' onClick={handleChangeQuote}><i className="fa fa-refresh fa-spin"></i></button>
            </article>

            <footer className='quoteCard__footer'>
                <p>Author: {quote.author}</p>
            </footer>

        </section>
    )
}
export default QuoteCard