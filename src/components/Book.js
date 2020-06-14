/* @jsx drawer.createElement */

import drawer from '../drawer/drawer';
import Page from '../components/Page';
import FuncComponent from './funcComponent';

class Book extends drawer.Component{
    constructor(props){
        super(props);
        this.state = {
            open: true,
            list: ['book 1', 'book 2', 'book 3'],
            newBook: ""
        }
        this.changeNewBook = this.changeNewBook.bind(this);
        this.addBook = this.addBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    changeNewBook(e){
        this.setState(function(prevState, props){
            return {newBook: prevState.newBook + e.target.value}
         }, () => {
             console.log('result');
         });
    }

    addBook(){
        this.setState({
            list: [...this.state.list, this.state.newBook]
        })
    }

    deleteBook(index){
        this.setState({
            list: [this.state.list.filter((el, ind) => ind !== index)]
        })
    }

    render(){
        return(
            <div>
                <div>
                    <input value={this.state.newBook} onChange={this.changeNewBook}/>
                    <button onClick={this.addBook}>Add book</button>
                </div>
                {
                    this.state.list.map((el, i) => {
                        return <p key={i} onClick={() => this.deleteBook(i)}>{el}</p>
                    })
                }
            </div>
        )
    }
}

export default Book;