import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export class TestComponent extends Component {

    render() {
        return (
            <div id="test" className="outer-body test">
                <Card>
                    <Image src='./assets/images/UN_logo.jpeg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                    </Card.Description>

                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                      </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default TestComponent
