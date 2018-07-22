import {
    Button,
    Container, 
    Card, 
    Image
} from 'semantic-ui-react'; 

const BlogCard = (props) => {
    return(
        <Card>
            <Card.Header>
                {props.blog.pubDate[0]}
            </Card.Header>
            <Card.Description>
                <h2>
                    {props.blog.title[0]}
                </h2>
            </Card.Description>
            <Card.Content>
                <Button href={props.blog.link[0]} basic color='green'>
                    Read
                </Button>
            </Card.Content>
            
        </Card>
    )
}

export default BlogCard