const React = require('react')

class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.handleChangeBitrate = this.handleChangeBitrate.bind(this)
    this.handleChangeResolution = this.handleChangeResolution.bind(this)

  }
  handleChangeResolution(){
    this.setState({
      settings: Object.assign({},this.state.settings,
        {
          video: Object.assign({},this.state.settings.video,
            {
              resolution: '720p'
            })
          })
        })
      }
  handleChangeBitrate(){
    this.setState({
      settings: Object.assign({},this.state.settings,
        {
              bitrate: 12
            })
          })
        }
  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>Click</button>
        <button className="resolution" onClick={this.handleChangeResolution}>Click</button>

      </div>
    )
   }
  }

module.exports = YouTubeDebugger;
