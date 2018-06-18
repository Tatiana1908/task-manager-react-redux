import { connect } from 'react-redux'

import TasksList from '../../components/tasks-list'
import { getTasks } from '../../store/actions'

const mapStateToProps = state => {
    return {
        tasksList: state.tasks,
    }
}

const mapDispatchToProps = {
    getTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)