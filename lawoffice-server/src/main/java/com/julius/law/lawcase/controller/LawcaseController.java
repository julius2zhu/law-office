package com.julius.law.lawcase.controller;


import com.julius.law.config.ResponseEntity;
import com.julius.law.lawcase.entity.Lawcase;
import com.julius.law.lawcase.service.ILawcaseService;
import io.swagger.models.auth.In;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 案件信息表 前端控制器
 * </p>
 *
 * @author julius
 * @since 2021-01-06
 */
@RestController
@RequestMapping("/lawcase/lawcase")
public class LawcaseController {
    private final ILawcaseService iLawcaseService;

    public LawcaseController(ILawcaseService iLawcaseService) {
        this.iLawcaseService = iLawcaseService;

    }

    /**
     * 添加一条案件信息
     *
     * @param lawInfo 案件信息组成的json字符串
     * @return 添加结果
     */
    @PostMapping("insert")
    public ResponseEntity insert(@RequestBody String lawInfo) {
        return iLawcaseService.insert(lawInfo);
    }

    /**
     * 列出所有案件信息
     *
     * @param currentPage 当前页
     * @param pageSize    每页显示条数
     * @return
     */
    @GetMapping("list")
    public ResponseEntity list(@RequestParam("currentPage") Integer currentPage,
                               @RequestParam("pageSize") Integer pageSize) {
        return iLawcaseService.listLawCases(currentPage, pageSize);
    }

    /**
     * 根据id删除一条信息
     *
     * @param id
     * @return
     */
    @DeleteMapping("delete")
    public ResponseEntity delete(@RequestParam Long id) {
        return iLawcaseService.delete(id);
    }

    /**
     * 更新信息
     *
     * @param lawCase 无法直接映射
     * @return
     */
    @PutMapping("update")
    public ResponseEntity update(@RequestBody Lawcase lawCase) {

        return null;
    }
}

