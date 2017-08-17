import React, { PureComponent } from 'react';
class Test extends PureComponent {
  componentWillReceiveProps(next) {
    console.log(next.doSmth === this.props.doSmth);
  }

  render() {
    const { userId } = this.props;
    console.log('test', this.props);
    return (
      <div className='flex mt2 items-start'>
        URA
        {userId}
      </div>
    )
  }
}

export default Test;
