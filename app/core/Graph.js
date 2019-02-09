import React from 'react'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Query } from 'react-apollo'


const Span = styled.span`
    font-weight: 700;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const GET_USERS = gql`
  {
    users {
      email
      first_name
    }
  }
`

export const Users = () => (
  <Query query={GET_USERS}>
    {
        ({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            return (
              <div>
                {data.users.map((user, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Wrapper key={index}>
                    <Span>{user.email}</Span>
                    <Span>{user.first_name}</Span>
                  </Wrapper>
                ))}
              </div>
            )
        }
    }
  </Query>
)
