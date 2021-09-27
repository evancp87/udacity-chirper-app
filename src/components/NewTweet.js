import React, { Component } from 'react'

 class NewTweet extends Component {
     state = {
         text: '',
     }
     handleChange = (e) => {
         const text =  e.target.value

         this.setstate(() => ({
             text

         }))
     } 
     handleSubmit = (e) => {
         e.preventDefault()
        
        const {text} = this.state

        // TODO: add tweet to the store

        this.setState(() => ({
            text: '',
        }))
        }
    render() {
        return (
            <div>
                New Tweet
                
            </div>
        )
    }
}

export default NewTweet
