import { connect } from 'react-redux'

import Task from '../../components/task'
import { removeTask, updateExpiredStatus } from '../../store/actions'


const mapDispatchToProps = {
    removeTask,
    updateExpiredStatus
}

export default connect(null, mapDispatchToProps)(Task)