import { connect } from 'react-redux'

import ExpiredTasksModal from '../../components/expired-tasks-modal'
import { removeTask } from '../../store/actions'

const mapStateToProps = state => {
    return {
        tasksList: state.tasks,
    }
}

const mapDispatchToProps = {
    removeTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpiredTasksModal)