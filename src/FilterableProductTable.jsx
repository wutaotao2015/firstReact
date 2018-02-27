import React, {Component} from 'react';

class ProductCategoryRow extends Component {
    render() {
        return (<tr colspan="2">{this.props.product.category}</tr>);
    }
}

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>
        return (<tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>);
    }
}

class ProductTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        const products = this.props.products;
        let lastCategory = null;
        products.forEach(product => {

            if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) return;
            if (inStockOnly && !product.stocked) return;

            if (lastCategory != product.category) {
                rows.push(<p><ProductCategoryRow product={product}/></p>)
            }
            rows.push(<ProductRow product={product}/>)
            lastCategory = product.category;
        });
        return (<table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>);
    }
}

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
    }

    handleTextChange(evt) {
        this.props.onTextChange(evt.target.value);
    }

    handleStockChange(evt) {
        this.props.onStockChange(evt.target.checked);
    }

    render() {
        return (<form>
            <input type="text" placeholder="Search..."
                   value={this.props.filterText}
                   onChange={this.handleTextChange}></input>
            <p>
                <input type="checkbox"
                       checked={this.props.inStockOnly}
                       onChange={this.handleStockChange}/>
                {' '}Only show products in stock
            </p>
        </form>);
    }
}

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
    }

    handleTextChange(val) {
        this.setState({
            filterText: val
        });
    }

    handleStockChange(val) {
        this.setState({
            inStockOnly: val
        });
    }

    render() {
        return (<div>
            <SearchBar filterText={this.state.filterText}
                       inStockOnly={this.state.inStockOnly}
                       onTextChange={this.handleTextChange}
                       onStockChange={this.handleStockChange}
            />
            <ProductTable products={this.props.products}
                          filterText={this.state.filterText}
                          inStockOnly={this.state.inStockOnly}/>
        </div>);
    }
}
// [
//     {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//     {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//     {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//     {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//     {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//     {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];
