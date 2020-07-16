import React, { useContext, useState } from 'react'
import {
  Container,
  Wrapper,
  Spacer,
  List,
  ListItem,
  Button,
  Text,
  TextArea,
  Title,
} from '3oilerplate'
import Axios from 'axios'
import { debounce } from 'lodash'
import { TrickContext } from '../../context'
import { Trick } from '../../components'
import { API_URL } from '../../constants'

const TricksView = () => {
  const { tricks }: any = useContext(TrickContext)
  const [requestMessage, setRequestMessage]: any = useState('')
  const [requestResult, setRequestResult]: any = useState(null)

  async function onRequestMessageChange(value: string) {
    if (requestResult) {
      setRequestResult(null)
    }

    setRequestMessage(value)
  }

  async function onSubmitRequest() {
    try {
      await Axios.post(`${API_URL}/request`, {
        body: {
          type: 'trick',
          message: requestMessage,
        },
      })

      setRequestResult({
        outcome: 'positive',
        message: 'Trick request successfully submitted!',
      })
    } catch (err) {
      setRequestResult({
        outcome: 'negative',
        message: err.message,
      })
    }

    setTimeout(() => {
      setRequestResult(null)
    }, 5000)
  }

  return (
    <Wrapper style={{ padding: 'l', overflow: 'hidden' }}>
      <Container style={{ overflow: 'hidden' }}>
        <Spacer size="l" style={{ overflow: 'hidden' }}>
          <Spacer style={{ overflow: 'hidden', width: '100%' }}>
            <Title>Tricks</Title>
            <List style={{ width: '100%', overflow: 'scroll' }}>
              {tricks.map((trick: any) => (
                <ListItem>
                  <Text type="small">
                    <Trick trick={trick} block showDifficulty />
                  </Text>
                </ListItem>
              ))}
            </List>
          </Spacer>

          <Spacer>
            <Text>
              Tricks are automatically generated on the server. If you feel
              there's a trick missing from the database, the difficulty for
              certain tricks is incorrect, or a trick should have a different
              name, you can request this over here:
            </Text>
            <TextArea
              placeholder="Fill in your request..."
              onChange={debounce(onRequestMessageChange, 250)}
            />
            <Button
              isDisabled={requestMessage.length < 4}
              onClick={onSubmitRequest}
            >
              Send
            </Button>
            {requestResult && (
              <Text small color={requestResult.outcome}>
                {requestResult.message}
              </Text>
            )}
          </Spacer>
        </Spacer>
      </Container>
    </Wrapper>
  )
}

export default TricksView
