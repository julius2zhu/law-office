package com.julius.law.lawcase.service.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.julius.law.config.PageInfo;
import com.julius.law.config.ResponseEntity;
import com.julius.law.lawcase.entity.Lawcase;
import com.julius.law.lawcase.mapper.LawcaseMapper;
import com.julius.law.lawcase.service.ILawassistService;
import com.julius.law.lawcase.service.ILawcaseService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.julius.law.lawcase.service.ILawhearService;
import com.julius.law.lawcase.service.ILawpartiesService;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 案件信息表 服务实现类
 * </p>
 *
 * @author julius
 * @since 2021-01-06
 */
@Service
@Primary
@Transactional
public class LawcaseServiceImpl extends ServiceImpl<LawcaseMapper, Lawcase> implements ILawcaseService {

    private final ILawpartiesService iLawpartiesService;
    private final ILawhearService iLawhearService;
    private final ILawassistService iLawassistService;
    private final LawcaseMapper lawcaseMapper;

    public LawcaseServiceImpl(ILawpartiesService iLawpartiesService,
                              ILawhearService iLawhearService,
                              ILawassistService iLawassistService,
                              LawcaseMapper lawcaseMapper) {
        this.iLawpartiesService = iLawpartiesService;
        this.iLawhearService = iLawhearService;
        this.iLawassistService = iLawassistService;
        this.lawcaseMapper = lawcaseMapper;
    }

    @Override
    public ResponseEntity insert(String lawInfo) {
        JSONArray jsonArray = JSONArray.parseArray(lawInfo);
        //取出案件基本信息
        JSONObject jsonObject = jsonArray.getJSONObject(0);
        Lawcase lawcase = jsonToLawCase(jsonObject);
        //添加数据接收返回的id
        lawcaseMapper.insert(lawcase);
        Long id = lawcase.getId();
        //取出当事人信息并添加到数据表中
        if (jsonArray.getJSONArray(1).size() > 0) {
            iLawpartiesService.insert(jsonArray.getJSONArray(1), id);
        }
        //取出审理人员信息
        if (jsonArray.getJSONArray(2).size() > 0) {
            iLawhearService.insert(jsonArray.getJSONArray(2), id);
        }
        //取出辅助人员信息
        if (jsonArray.getJSONArray(3).size() > 1) {
            iLawassistService.insert(jsonArray.getJSONArray(3), id);
        }
        return new ResponseEntity(200, "添加成功", null);
    }

    @Override
    public ResponseEntity delete(Long id) {
        Lawcase lawcase = new Lawcase();
        lawcase.setId(id);
        lawcase.setDeleteStatus("1");
        lawcaseMapper.updateById(lawcase);
        return new ResponseEntity(200, "删除成功", null);
    }

    @Override
    public ResponseEntity listLawCases(Integer currentPage, Integer pageSize) {
        IPage<Lawcase> pageInfo = new Page<>(currentPage, pageSize);
        QueryWrapper<Lawcase> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("deleteStatus", "0");
        IPage<Lawcase> page = lawcaseMapper.selectPage(pageInfo, queryWrapper);
        Map<String, Object> map = new HashMap<>();
        map.put("tableData", page.getRecords());
        map.put("pageInfo", new PageInfo(currentPage, pageSize, pageInfo.getTotal()));
        return new ResponseEntity(200, "请求成功", map);

    }

    @Override
    public void resetTable() {
        lawcaseMapper.resetTable();
    }

    /**
     * 将json类型的字符串转换成实体
     *
     * @param jsonObject
     * @return 案件信息
     */
    private Lawcase jsonToLawCase(JSONObject jsonObject) {
        Lawcase lawcase = new Lawcase();
        lawcase.setUsername(jsonObject.getString("username"));
        lawcase.setName(jsonObject.getString("name"));
        lawcase.setPrincipal(jsonObject.getString("principal"));
        lawcase.setType(jsonObject.getString("type"));
        lawcase.setLevel(jsonObject.getString("level"));
        lawcase.setReason(jsonObject.getString("reason"));
        lawcase.setProgram(jsonObject.getString("program"));
        lawcase.setOrganization(jsonObject.getString("organization"));
        lawcase.setOrganizationNumber(jsonObject.getString("organizationNumber"));
        lawcase.setBackup(jsonObject.getString("backup"));
        return lawcase;
    }
}
