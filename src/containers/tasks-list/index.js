import { connect } from 'react-redux'

import TasksList from '../../components/tasks-list'
import { getTasks } from '../../store/tasks-list/action'

const mapStateToProps = state => {
    return {
        tasksList: state.tasks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: () => dispatch(getTasks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)