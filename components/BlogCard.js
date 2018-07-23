import {
    Button,
    Container, 
    Card, 
    Image,
    Item
} from 'semantic-ui-react'; 


const parseSubjects = (props) => {
    let subjects = props.blog.category.map(item => {return <Item>{item}</Item> })
    return subjects
}
{/* <Item.Group divided>
{
 parseSubjects(props)
}
</Item.Group>> */}

const BlogCard = (props) => {
    return(
        <Card style={{padding: '10px'}}>
            <Card.Meta>
                <p>Published: {new Date(props.blog.pubDate[0]).toLocaleDateString()}</p>
            </Card.Meta>
            <Card.Description>
                <h3>
                 {props.blog.title[0]}
                </h3>
            </Card.Description>
            <style jsx>
                {
                    `
                        p, h3{
                            font-size: larger;
                            font-family:"Lucida Console", Monaco, monospace;
                        }
                       
                    `
                }
                </style>
        </Card>
    )
}

export default BlogCard