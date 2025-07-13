"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { testimonialsInfo } from "@/lib/types/cards";
import { FilterXIcon } from "lucide-react";
import { useMemo, useState } from "react";

interface TestimonialsPaginatedProps {
  testimonials: testimonialsInfo[];
}

export default function TestimonialsPaginated({
  testimonials,
}: TestimonialsPaginatedProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [selectedSchool, setSelectedSchool] = useState<string>("all");
  const [selectedClass, setSelectedClass] = useState<string>("all");

  // Get unique schools and classes for filter options
  const uniqueSchools = useMemo(() => {
    const schools = Array.from(new Set(testimonials.map((t) => t.school)))
      .filter((school) => school !== "Anonymous")
      .sort();
    return schools;
  }, [testimonials]);

  const uniqueClasses = useMemo(() => {
    const classes = Array.from(
      new Set(testimonials.map((t) => t.class))
    ).sort();
    return classes;
  }, [testimonials]);

  // Filter testimonials based on selected filters
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((testimonial) => {
      const schoolMatch =
        selectedSchool === "all" || testimonial.school === selectedSchool;
      const classMatch =
        selectedClass === "all" || testimonial.class === selectedClass;
      return schoolMatch && classMatch;
    });
  }, [testimonials, selectedSchool, selectedClass]);

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = filteredTestimonials.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of testimonials section
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleSchoolFilter = (value: string) => {
    setSelectedSchool(value);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleClassFilter = (value: string) => {
    setSelectedClass(value);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const clearFilters = () => {
    setSelectedSchool("all");
    setSelectedClass("all");
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedSchool !== "all" || selectedClass !== "all";

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to max visible
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      // Show ellipsis if current page is far from start
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Show ellipsis if current page is far from end
      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Show last page
      if (totalPages > 1) {
        items.push(
          <PaginationItem key={totalPages}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(totalPages);
              }}
              isActive={currentPage === totalPages}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return items;
  };

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col gap-2">
            <Label htmlFor="school-filter">Filter by School:</Label>
            <Select value={selectedSchool} onValueChange={handleSchoolFilter}>
              <SelectTrigger id="school-filter" className="w-64">
                <SelectValue placeholder="All Schools" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Schools</SelectItem>
                {uniqueSchools.map((school) => (
                  <SelectItem key={school} value={school}>
                    {school}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="class-filter">Filter by Class:</Label>
            <Select value={selectedClass} onValueChange={handleClassFilter}>
              <SelectTrigger id="class-filter" className="w-48">
                <SelectValue placeholder="All Classes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {uniqueClasses.map((className) => (
                  <SelectItem key={className} value={className}>
                    {className}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasActiveFilters && (
            <Button
              variant="outline"
              size="default"
              onClick={clearFilters}
              className="flex gap-2 items-center"
            >
              <FilterXIcon className="size-4" />
              Clear Filters
            </Button>
          )}
        </div>

        {hasActiveFilters && (
          <div className="text-muted-foreground text-sm">
            Active filters:
            {selectedSchool !== "all" && (
              <span className="bg-primary/10 ml-1 px-2 py-1 rounded text-primary">
                School: {selectedSchool}
              </span>
            )}
            {selectedClass !== "all" && (
              <span className="bg-primary/10 ml-1 px-2 py-1 rounded text-primary">
                Class: {selectedClass}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
        <div className="flex gap-2 items-center">
          <Label htmlFor="items-per-page">Show:</Label>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={handleItemsPerPageChange}
          >
            <SelectTrigger id="items-per-page" className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="18">18</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-muted-foreground text-sm">per page</span>
        </div>

        <div className="text-muted-foreground text-sm">
          Showing {filteredTestimonials.length === 0 ? 0 : startIndex + 1}-
          {Math.min(endIndex, filteredTestimonials.length)} of{" "}
          {filteredTestimonials.length} testimonials
          {hasActiveFilters && (
            <span className="ml-1">
              (filtered from {testimonials.length} total)
            </span>
          )}
        </div>
      </div>

      {/* Testimonials Grid */}
      {filteredTestimonials.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No testimonials found matching your filters.
          </p>
          <Button
            variant="outline"
            onClick={clearFilters}
            className="flex gap-2 items-center mt-4 mx-auto"
          >
            <FilterXIcon className="size-4" />
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={startIndex + index}
              testimonial={testimonial}
              index={startIndex + index}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {renderPaginationItems()}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
