import React, { useEffect } from 'react';
import IndexNav from './indexNav';
import TopicsList from '../../component/topicslist';
import { useSelector } from 'react-redux';
import { useTopicsList } from '../../store/action';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import IndexPagination from './indexPagination';

function IndexPage() {
  let { loading, data } = useSelector(state => state.topics);
  let getData = useTopicsList();
  let { search } = useLocation();
  let { tab = "all", page = 1 } = qs.parse(search.substr(1));
  useEffect(() => {
    getData(tab, page);
  }, [tab, page]);

  return (
    <div>
      <IndexNav />
      <TopicsList
        data={data}
        loading={loading} />
      {loading ? "" : <IndexPagination />}
    </div>
  );
}

export default IndexPage;
